
import Tots from '../tots.png';
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function Description() {
  return (
    <div className='bg-black pt-16 lg:py-24 h-screen'>
      <div className='pb-16 bg-black lg:pb-0 lg:z-10 lg:relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-8'>
          <div className='mt-12 lg:m-0 lg:col-span-2 lg:pl-8'>
            <div className='text-left'>
              <div>
                <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                  <span className='text-fuchsia-500 font-ibm-plex'>
                    Description
                  </span>
                </h1>
                <p className='mt-6 text-2xl font-normal text-white '>
                  TOTS is a reward token to be given out by CPNK Studios. TOTS
                  allows{' '}
                  <span className='text-fuchsia-500 font-ibm-plex font-extrabold'>
                    advertisers
                  </span>{' '}
                  to access audiences cultivated by NFTato Studios projects via
                  decentralized ad buys and marketing campaigns. The{' '}
                  <span className='text-fuchsia-500 font-ibm-plex font-extrabold'>
                    consumer
                  </span>{' '}
                  user spends TOTS on future releases, exclusive unlockable
                  content, gameplay and metaverse access. NFTato Studios is a
                  crypto-first entertainment studio. It releases NFTs, games,
                  apps, and traditional entertainment such as movies and music.
                  Each NFT is packaged into an audience for advertising
                  purposes. Each time NFTato Studios releases a new project, the
                  value of TOTS increases. TOTS investors will have exclusive,
                  early-pricing access o the NFTato Studios raise. At the time
                  of this writing, the details of this raise are still being
                  finalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
