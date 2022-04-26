import { useState, useEffect, useCallback } from 'react'
import { client } from '../client';

export default function Timeline() {

    const [isDataLoading, setIsDataLoading] = useState(false)
    const [data, setData] = useState(null);




    const cleanUpContentData = useCallback((rawData) => {

        const cleanData = rawData.map((dataObj) => {

            const { sys, fields } = dataObj
            console.log(dataObj, 'jj')
            const { id } = sys
            const { phases } = fields
            return phases

        })

        setData(cleanData[0])
    }, [])

    useEffect(() => {
        setIsDataLoading(true)
        const getData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: 'totsTimeline',
                });
                console.log(response)
                const responseData = response.items
                if (responseData.length > 0) {
                    cleanUpContentData(responseData)
                } else {
                    setData(null);
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


    if (isDataLoading || !data) return <p>Loading...</p>


    return (
        <div class="flex flex-col justify-center py-6 lg:py-12 bg-white" id='timeline'>
            <h3 className='font-extrabold text-black text-center my-12 text-4xl'>Timeline</h3>
            <div class="w-full mx-auto lg:max-w-4xl">
                <div class="relative">
                    <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
                    <div class="space-y-12 lg:space-y-8">
                        <div>
                            <div class="flex flex-col items-center">
                                <div class="flex items-center justify-start w-full mx-auto">
                                    <div class="w-full lg:w-1/2 lg:pr-8">
                                        <div class="p-4 bg-white rounded shadow-lg shadow-cyan-300">
                                            <h3 className='text-2xl text-black my-3 font-extrabold'>{data[0]?.title}</h3>
                                            <h3 className='text-xl text-black my-3 font-extrabold'>{data[0]?.subTitle}</h3>
                                            <ul className='list-disc ml-3'>
                                            {
                                                    data[0]?.listItems?.map((d) => <li className='text-black font-extrabold'>{d}</li>)
                                            }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                                    <span class="text-white font-extrabold">1</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col items-center">
                                <div class="flex items-center justify-end w-full mx-auto">
                                    <div class="w-full lg:w-1/2 lg:pl-8">
                                        <div class="p-4 bg-white rounded shadow-lg shadow-red-300">
                                            <h3 className='text-2xl text-black my-3 font-extrabold'>{data[1]?.title}</h3>
                                            <h3 className='text-xl text-black my-3 font-extrabold'>{data[1]?.subTitle}</h3>
                                            <ul className='list-disc ml-3'>
                                                {
                                                    data[1]?.listItems?.map((d) => <li className='text-black font-extrabold'>{d}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                                    <span class="text-white font-extrabold">2</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col items-center">
                                <div class="flex items-center justify-start w-full mx-auto">
                                    <div class="w-full lg:w-1/2 lg:pr-8">
                                        <div class="p-4 bg-white rounded shadow-lg shadow-yellow-300">
                                            <h3 className='text-2xl text-black my-3 font-extrabold'>{data[2]?.title}</h3>
                                            <h3 className='text-xl text-black my-3 font-extrabold'>{data[2]?.subTitle}</h3>
                                            <ul className='list-disc ml-3'>
                                                {
                                                    data[2]?.listItems?.map((d) => <li className='text-black  font-extrabold'>{d}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                                    <span class="text-white font-extrabold">3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}