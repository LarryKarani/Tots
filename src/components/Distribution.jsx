import Chart from 'react-apexcharts'
import { useState, useEffect, useCallback } from 'react'
import { client } from '../client';


const Distribution = () => {


  const [isDataLoading, setIsDataLoading] = useState(false)
  const [data, setData] = useState({});




  const cleanUpContentData = useCallback((rawData) => {

    const cleanData = rawData.map((dataObj) => {

      const { sys, fields } = dataObj
      const { id } = sys

      const { totsDistribution, allocations } = fields

  

      return { id, totsDistribution, allocations }

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
  const dataOptions = {
    series: data.totsDistribution && Object.values(data.totsDistribution),
    options: {
      chart: {
        type: 'pie'
      },
      legend: {
        showForSingleSeries: true,
        show: true,
        position: 'bottom',
        horizontalAlign: 'center', 
        width: '50%'
        
      },
      labels: data?.totsDistribution && Object.keys(data.totsDistribution),
      responsive: [{
        options: {
          legend: {
            showForSingleSeries: true,
            show: true,
            position: 'bottom'
          }
        }
      }]
    },


  };
  return (
    <div className='mx-auto flex flex-col justify-center'>
      <h3 className='font-extrabold text-white text-4xl text-center mb-12'>Distribution</h3>

      <div className='flex flex-col justify-center mx-auto mb-5'>
        {data?.allocations?.map((all, i) => <p className='text-white font-bold'> {i + 1}. {all}</p>)}
        <div >
          <Chart options={dataOptions.options} series={dataOptions.series} type="pie" width={500} />
        </div>
      </div>
      
    </div>

  )
}

export default Distribution
