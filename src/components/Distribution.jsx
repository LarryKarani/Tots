import Chart from 'react-apexcharts'
import { useState, useEffect, useCallback } from 'react'
import { client } from '../client';

import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: MailOpenIcon, change: '5.4%', changeType: 'increase' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const DataTable = ({data}) =>{
  return (
    <div className='mt-8 flex flex-col'>
      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black bg-indigo-500 ring-opacity-5 md:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-300  bg-indigo-500'>
              <thead className=' bg-indigo-200'>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-extra-bold text-black sm:pl-6'
                  >
                    {data?.tokensSoldByPeriod?.title}
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-extra-bold text-black sm:pl-6'
                  >
                    {data?.tokensSoldByPeriod?.title2}
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {
                  <>
                  {
                      data?.tokensSoldByPeriod?.colmnData?.map((colObj, i) => {
                        return (

                          <tr key={i}>
                            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold text-gray-500 sm:pl-6'>
                              {colObj.col1}%
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                              {colObj.col2}%
                            </td>

                          </tr>

                        )
                      }
                      
                      )
                    }
                  </>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}



const Stats = ({dataOptions, data}) => {



  return (
    <div>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {
          <div
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
           <DataTable data={data}/>
          </div>
        }
        {
          <div
            className="relative bg-yellow-500 flex justify-center pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <Chart options={dataOptions.options} series={dataOptions.series} type="pie" width={500} />
          </div>
        }
      </dl>
    </div>
  )
}



const Distribution = () => {


  const [isDataLoading, setIsDataLoading] = useState(false)
  const [data, setData] = useState({});




  const cleanUpContentData = useCallback((rawData) => {

    const cleanData = rawData.map((dataObj) => {
      console.log(dataObj, 'lol')
      const { sys, fields } = dataObj
      const { id } = sys

      const { totsDistribution, allocations, marketing, tokensSoldByPeriod, useOfCapital } = fields

  

      return { id, totsDistribution, allocations, marketing, tokensSoldByPeriod, useOfCapital,  }

    })

    console.log(cleanData[0], 'jjah')

    setData(cleanData[0])
  }, [])

  useEffect(() => {
    setIsDataLoading(true)
    const getData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'distribution',
        });
        console.log(response)
        const responseData = response.items
        if (responseData.length > 0) {
          cleanUpContentData(responseData)
        } else {
          setData({});
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
  const seriesValue = data?.tokensSoldByPeriod?.colmnData?.map((obj) => obj.col2)
  const labels = data?.tokensSoldByPeriod?.colmnData?.map((obj) => obj.col1)
  const dataOptions = {
    series: seriesValue,
    options: {
      chart: {
        type: 'pie'
      },
      legend: {
        showForSingleSeries: true,
        show: true,
        position: 'bottom',
        horizontalAlign: 'center', 
        
      },
      labels: labels,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width:'100%'
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


  };
  return (
    <div className='mx-auto flex flex-col justify-center'>
      <Stats dataOptions={dataOptions} data={data}/>
    </div>

  )
}

export default Distribution
