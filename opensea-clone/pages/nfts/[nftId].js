import Navbar from '../../components/Navbar'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
import NFTDetails from '../../components/nft/NFTDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import Purchase from '../../components/nft/Purchase'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])
  const router = useRouter()
  console.log(router.query)
  console.log(router.query.nftId)

  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/_JJpaK3ysHjeCviY6LFITOTOFc3qtktE'
    )
    return sdk.getNFTModule('0x8D7B625C254A2eC715aCF4F59A1435B852Ac6489')
  }, [provider])

  console.log(nftModule)
  // get all the nfts in the collection
  useEffect(() => {
    console.log("not working")
    if (!nftModule) return
    ;(async () => {
      console.log("not working")
      const nfts = await nftModule.getAll()

      const selectedNftItem = nfts.find(
        (nft) => nft.id === router.query.nftId
      )
      console.log(selectedNftItem)
      setSelectedNft(selectedNftItem)
    })()
  }, [nftModule])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/_JJpaK3ysHjeCviY6LFITOTOFc3qtktE'
    )

    return sdk.getMarketplaceModule(
      '0xFdaD1B9Ca60Bf277Ae45b016874E3e0E1624164A'
    )
  }, [provider])

  // updates on marketplacemodule
  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])


  return (
    <div>
      <Navbar />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft} />
            </div>
            <div className={style.detailsContainer}>
              <NFTDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
              />
            </div>
          </div>
          <ItemActivity/>
        </div>
      </div>
    
    </div>
  )
}

export default Nft
