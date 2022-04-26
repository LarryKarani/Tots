import Tots from '../tots.png';
import { useState, useEffect, useCallback } from 'react'
import { client } from '../client';
import HeroBackground from './heroBg';
//import './hero.scss'

const testData = {
  title: '',
  description: '',
  image: ''
}

export default function Hero() {

  const [isDataLoading, setIsDataLoading] = useState(false)
  const [data, setData] = useState(testData);




  const cleanUpContentData = useCallback((rawData) => {

    const cleanData = rawData.map((dataObj) => {

      const { sys, fields } = dataObj
      const { id } = sys

      const { title } = fields

      const { description } = fields

      const image = fields.heroImage.fields.file.url

      return { id, title, description, image }

    })

    setData(cleanData[0])
  }, [])

  useEffect(() => {
    setIsDataLoading(true)
    const getData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'landingHero',
        });
        const responseData = response.items
        if (responseData.length > 0) {
          cleanUpContentData(responseData)
        } else {
          setData(testData);
        }
        console.log(responseData)
        setIsDataLoading(false);
      } catch (err) {
        console.log(err);
        setIsDataLoading(false)
      }
    };
    getData();
  }, [cleanUpContentData]);

  if (isDataLoading) return <p>Loading...</p>


  return (
    <>
      <div className='text-white w-3/4 mx-auto pt-6' id='home'>
        <div className='relative overflow-hidden'>
          <main>
            <div className='pt-5  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
              <div className='mx-auto max-w-7xl lg:px-8'>
                <div className='lg:grid lg:grid-cols-1'>
                
                  <div className='mt-12  align-center justify-center'>
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className='w-full object-cover'
                      src={data.image}
                      alt=''
                    />
                  </div>
                  <div className=''>
                    <div>
                      <p className='mt-3 font-bold text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                        {data.description}
                      </p>
                      <div className='mt-8 flex justify-left'>
                        <div className='inline-flex rounded-md shadow'>
                          <button type="button" className="text-black font-extrabold bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join Discord </button>
                          <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join Presale whitelist</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More main page content here... */}
          </main>
        </div>
      </div>
    </>
  );
}