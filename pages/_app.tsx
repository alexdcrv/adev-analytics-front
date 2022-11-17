import '../styles/app.sass'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { RootStore } from '../stores/RootStore'
import { Provider } from 'inversify-react'
import { ModalsContainer, ModalsEnum } from '../modals'
import Layout from '../components/layout/layout'

const rootStore = new RootStore()
const container = rootStore.container

function MyApp({ Component, pageProps }: AppProps) {
    
    const NextComponent = Component as any;
    // try reconnect to web3
    useEffect(() => {
        rootStore.walletStore.tryReconnect()
    }, [])

    return (
        <Provider container={container}>
            <Layout>
                <NextComponent {...pageProps} />
            </Layout>
            <ModalsContainer />
        </Provider>
    )
}

export default MyApp
