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
        <div className='max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            <span className='block text-purple-500'>TOTS</span>
          </h2>
          <p className='mt-4 text-xl leading-6 font-extrabold'>{data.description}</p>
          <div className='mt-8 flex justify-center'>
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
    </>
  );
}
