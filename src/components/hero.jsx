import Tots from '../tots.png';
import { useState,useEffect, useCallback } from 'react'
import { client } from '../client';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';
//import './hero.scss'
import Separator from './separator'


// interface HeroData {

//     title: string
//     description: string
//     image: string
// }

const testData ={
     title: '',
     description: '',
     image: ''
}

export default function Hero() {

  const [isDataLoading, setIsDataLoading] = useState(false)
  const [data, setData] = useState(testData);




 const cleanUpContentData = useCallback((rawData) => {

     const cleanData = rawData.map((dataObj) => {

         const {sys, fields} = dataObj
         const {id} = sys

         const {title} = fields

         const {description} = fields

         const image = fields.heroImage.fields.file.url

         return {id, title, description, image}

     } )

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
        if(responseData.length > 0){
           cleanUpContentData(responseData)
        }else{
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

  if(isDataLoading) return <p>Loading...</p>


  return (
    <>
      <div className='text-white w-3/4 mx-auto pt-12' id='home'>
        <div className='relative overflow-hidden'>
          <main>
            <div className='pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
              <div className='mx-auto max-w-7xl lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
                  <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                    <div>
                      <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                        <span className='block text-yellow-600'>$ TOTS</span>
                      </h1>
                      <p className='mt-3 font-bold text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                        {data.description}
                      </p>
                      <div className='mt-8 flex justify-left'>
                        <div className='inline-flex rounded-md shadow'>
                          <Link
                            to='/'
                            className='inline-flex items-center  text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
                          >
                            <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-purple-500 to-pink-500 rounded-full'>
                              Join discord channel
                            </span>
                            <ChevronRightIcon
                              className='ml-2 w-5 h-5 text-gray-500'
                              aria-hidden='true'
                            />
                          </Link>
                        </div>
                        <div className='ml-3 inline-flex'>
                          <Link
                            to='/'
                            className='inline-flex items-center text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
                          >
                            <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-pink-500 rounded-full'>
                              Join Presale whitelist
                            </span>
                            <ChevronRightIcon
                              className='ml-2 w-5 h-5 text-gray-500'
                              aria-hidden='true'
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-12  align-center justify-center'>
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <img
                        className='w-full object-cover'
                        src={data.image}
                        alt=''
                      />
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
