import Web3 from 'web3';
import request, { getAuthTokenTTL, setAuthToken, setLocalStorage } from "../service";
import jwtDecode from "jwt-decode";

export async function login(myWallet: string, web3: Web3) {
    try {
        const token = await request<{message: string}>({ url: `auth/${myWallet}` })

        const jwtTTL = getAuthTokenTTL();
        const isTokenExpired = parseInt(`${jwtTTL}`) < Date.now();
        if (web3 && isTokenExpired || !localStorage.getItem('jwt')) {
            const signature = await web3.eth.personal.sign(
                web3?.utils.utf8ToHex(
                    `For login to the site, I sign this data: ${token?.message}`
                ),
                myWallet,
                token?.message
            );

            const { data } = await request<{ data: { address: string, jwt: string } }>({
                url: `auth/${token?.message.trim()}/${signature.trim()}`
            })

            setAuthToken(data.jwt);
            setLocalStorage('jwt', data.jwt)
            const decodedData = jwtDecode<{ exp: number }>(data.jwt)

            setLocalStorage("jwtTTL", (decodedData.exp * 1000).toString());
            return data.jwt;
        }
    } catch (error) {
        console.error(error)
    }
}
