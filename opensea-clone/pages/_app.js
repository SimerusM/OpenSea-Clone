import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'


// 4 Represents that we're using Rinkeby test network
const supportedChainIds= [4]

// Injected connector is a web3 connection method used by MetaMask
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
