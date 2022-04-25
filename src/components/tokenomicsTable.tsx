import React, { useCallback, useEffect, useState } from 'react';
import { client } from '../client';

const TokenomicsTable = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [data, setData] = useState<any>({});

  const cleanUpContentData = useCallback((rawData) => {
    const cleanData = rawData.map((dataObj: any) => {
      const { sys, fields } = dataObj;
      const { id } = sys;

      const { title } = fields;

      const { description } = fields;
      const { tokenomicsTable } = fields;
      const { imageData } = fields

      return { id, title, description, tokenomicsTable, imageData };
    });

    setData(cleanData[0]);
  }, []);

  useEffect(() => {
    setIsDataLoading(true);
    const getData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'metricsAndTokenomics',
        });
        console.log(response, 'tokenomics');
        const responseData = response.items;
        if (responseData.length > 0) {
          cleanUpContentData(responseData);
        } else {
          setData({});
        }
        console.log(responseData);
        setIsDataLoading(false);
      } catch (err) {
        console.log(err);
        setIsDataLoading(false);
      }
    };
    getData();
  }, [cleanUpContentData]);

  if (isDataLoading) return <p>Loading...</p>;
  console.log(data, 'kksks');
  return (
    <div className='px-4 sm:px-6 lg:px-8 bg-white py-20 pt-28' id='tokenomics'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-4xl font-extrabold text-yellow-600 text-center'>
            {data.title}
          </h1>
          <p className='text-xl font-bold text-gray-500 text-center mt-3'>
            {data.description}
          </p>
        </div>
      </div>
      <div className='mt-8 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    {data?.tokenomicsTable?.tableHeader?.map(
                      (headerData: string) => {
                        return (
                          <th
                            scope='col'
                            className='py-3.5 pl-4 pr-3 text-left text-sm font-extra-bold text-black sm:pl-6'
                          >
                            {headerData}
                          </th>
                        );
                      }
                    )}
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {
                    <>
                      <tr>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold text-gray-500 sm:pl-6'>
                          Seed
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Seed[0]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Seed[1]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Seed[2]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Seed[3]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Seed[4]} months
                        </td>
                      </tr>
                      <tr>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold text-gray-500 sm:pl-6'>
                          Private
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Private[0]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Private[1]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Private[2]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Private[3]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Private[4]} months
                        </td>
                      </tr>

                      <tr>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold text-gray-500 sm:pl-6'>
                          Public
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Public[0]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Public[1]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Public[2]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Public[3]}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold'>
                          {data?.tokenomicsTable?.rows[0].Public[4]}
                        </td>
                      </tr>
                    </>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto mt-5 flex justify-center'>
        <img
          src={data?.imageData?.fields?.file?.url}
          alt='data'
          style={{width: '80%'}}
        />
      </div>
    </div>
  );
};

export default TokenomicsTable;
