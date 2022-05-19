import Chart from 'react-apexcharts'
import { useState, useEffect, useCallback } from 'react'
import { client } from '../client';
import { MailOpenIcon, UsersIcon } from '@heroicons/react/outline'
import Phase from './stats';

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


  const seriesValue = data?.useOfCapital?.distribution?.map((obj) => obj.value)
  const labels = data?.useOfCapital?.distribution?.map((obj) => obj.title)
  const dataO = {
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
            width: '100%'
          },
          legend: {
            position: 'bottom',
            labels: {
              colors: ['#7ba1c6', '#95d8f0', '#d87544', '#faaf4c', '#7bc8a1', '#59667c'],
              useSeriesColors: true
            },

          }
        }
      }]
    },


  };

  const seriesValue1 = data?.marketing?.devData?.map((obj) => obj.value)
  const labels1 = data?.marketing?.devData?.map((obj) => obj.title)
  console.log(seriesValue1, 'juijhyyy')
  const dataO1 = {
    series: seriesValue1,
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
      labels: labels1,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            position: 'bottom',
            labels: {
              colors: ['#7ba1c6', '#95d8f0', '#d87544', '#faaf4c', '#7bc8a1', '#59667c'],
              useSeriesColors: true
            },

          }
        }
      }]
    },


  };

  const seriesValue2 = data?.marketing?.marketingData?.map((obj) => obj.value)
  const labels2 = data?.marketing?.marketingData?.map((obj) => obj.title)
  const dataO2 = {
    series: seriesValue2,
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
      labels: labels2,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            position: 'bottom',
            labels: {
              colors: ['#7ba1c6', '#95d8f0', '#d87544', '#faaf4c', '#7bc8a1', '#59667c'],
              useSeriesColors: true
            },

          }
        }
      }]
    },


  };



  return (
    <>
      <div id='break-down'>
      <h3 className='text-black font-extrabold text-4xl text-center mb-3'> Tokenomics</h3>
        <h3 className='text-black font-extrabold text-3xl text-center'> 35B $TOTS Tokens</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {
          <div
            className="relative bg-gray-200 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
           <DataTable data={data}/>
          </div>
          } 
        {
          <div
            className="relative bg-black flex justify-center pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <Chart options={dataOptions.options} series={dataOptions.series} type="pie" width={500} />
          </div>
        }
      </dl>
    </div>
      <div id="expenses">
        <h3 className='text-white font-extrabold text-4xl text-center my-6'> Phase 1 Allocations</h3>
        <h3 className='text-white font-extrabold text-3xl text-center'> Use of capital</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {
            <div
              className="relative bg-indigo-300 flex justify-center pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <Chart options={dataO.options} series={dataO.series} type="pie" width={500}/>
            </div>
          }
          {
            <div
              className="relative bg-white flex justify-center align-center pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 flex flex-col justify-center align-center">
                <dt className="text-8xl font-extrabold text-gray-900 truncate text-center">95%</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-500">Allocated to Development, Security, and Marketing</dd>
              </div>
            </div>
          }
        </dl>
      </div>
      <div>
        <h3 className='text-black font-extrabold text-4xl text-center my-6'> Phase 1  Marketing and Development Allocations</h3>
        <h3 className='text-black font-extrabold text-3xl text-center'> Use of capital</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
         
          {
            <div
              className="relative bg-black mb-5 flex justify-center pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <h3 className='font-extrabold text-white text-3xl text-center'>Development</h3>
              <Chart options={dataO1.options} series={dataO1.series} type="pie" width={500} />
            </div>
          }
          {
            <div
              className="relative bg-indigo-300 mb-5 flex justify-center pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <h3 className='font-extrabold text-black text-3xl text-center'>Marketing</h3>
              <Chart options={dataO2.options} series={dataO2.series} type="pie" width={500} />
            </div>
          }
        </dl>

        <Phase data={data?.marketing?.phaseOneData} headline='Metrics - Phase One' color='yellow'/>
        <Phase data={data?.marketing?.phaseTwoData} headline='Metrics - Phase Two' color='pink' />
        <Phase data={data?.marketing?.phaseThreeData} headline='Metrics - Phase Three' color='blue'/>
      </div>
    </>
  )
}



const Distribution = () => {


  const [isDataLoading, setIsDataLoading] = useState(false)
  const [data, setData] = useState({});




  const cleanUpContentData = useCallback((rawData) => {

    const cleanData = rawData.map((dataObj) => {
    
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
      fill: {
        colors: ['#7ba1c6','#95d8f0','#d87544', '#faaf4c', '#7bc8a1','#59667c']
      },
      labels: labels,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width:'100%'
          },
          legend: {
            position: 'bottom',
            labels: {
              colors: ['#7ba1c6', '#95d8f0', '#d87544', '#faaf4c', '#7bc8a1', '#59667c'],
              useSeriesColors: true
            },

          }
        }
      }]
    },


  };
  return (
    <div className='mx-auto flex flex-col justify-center bg-white'>
      <Stats dataOptions={dataOptions} data={data}/>
    </div>

  )
}

export default Distribution
