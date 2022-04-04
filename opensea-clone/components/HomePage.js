import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/cZHLd-BI6teXHbyjmQmhX7zfjnCwFnvcpsvL4GOThTffvZcZbfUIIjgU6E-GnMkfPT56Gq3XBuDdH_9fgQyDet6FgLNesZYRVxzrXy4=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, trade, and sell NFTs
            </div>
            <div className={style.description}>
              Welcome to the best NFT marketplace on the internet
            </div>

            {/* Buttons */}
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>

          </div>
          <div className={style.cardContainer}>
            <img className="rounded-t-lg" src='https://lh3.googleusercontent.com/cZHLd-BI6teXHbyjmQmhX7zfjnCwFnvcpsvL4GOThTffvZcZbfUIIjgU6E-GnMkfPT56Gq3XBuDdH_9fgQyDet6FgLNesZYRVxzrXy4=s550' alt=""/>
            <div className={style.infoContainer}>
              <img className='h-[2.25rem] rounded-full' src="https://lh3.googleusercontent.com/hP96CgF_s98bk2eWdaJCcQmSymvxtBzbVzvuCY1s1hGeuK4SVygOY4QDVIMRHZFMB9OnVD6qATZ1_319DOUJhIrfYcl_g_qt6757=s80"/>
              <div className={style.author}>
                <div className={style.name}>gale</div>
                <a className="text-[#1868b7]" href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/51082641443820473803318409807995596753001585459316189646274989688412379807745">
                  EbukaMordi
                </a>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage