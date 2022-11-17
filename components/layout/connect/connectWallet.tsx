import classNames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import Web3Store from "../../../stores/WalletStore";
import { addressSlice } from "../../../utils/helper";
import styles from "./connect.module.scss";

const ConnectWallet = observer(() => {
  const walletStore = useInjection(Web3Store);
  return (
    <div >
      {!walletStore.connected ? (
          <button
            className={classNames(
              styles.connect,
            )}
            onClick={() => walletStore.login()}
          >
            <div className={styles.connect__text}>Connect wallet</div>
          </button>
        ) : (
          <button
            className={classNames(
              styles.connect,
            )}
            onClick={() => walletStore.resetWallet()}
          >
            <span>{addressSlice(walletStore.user.wallet)}</span>
            <br />
            <span>Disconnect</span>
          </button>
        )}

    </div>
  );
});
export default ConnectWallet;
