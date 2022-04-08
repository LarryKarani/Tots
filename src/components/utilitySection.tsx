import Separator from "./separator";
import './hero.scss'
import { client } from '../client';
import { useCallback, useEffect, useState } from "react";
import { getConfigFileParsingDiagnostics } from "typescript";
import UtilityCard from "./utilityCard";


const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Utility() {


  const [isDataLoading, setIsDataLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  const cleanUpContentData = useCallback((rawData) => {
    const results =  []
    const cleanData = rawData.map((dataObj: any) => {
      const { fields } = dataObj;

      return {fields};
    });

    setData(cleanData[0].fields);
  }, []);

  useEffect(() => {
    setIsDataLoading(true);
    const getData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'totsUtility',
        });
        console.log(response, 'response')
        const responseData = response.items;
        console.log(responseData, 'response items');
        if (responseData.length > 0) {
          cleanUpContentData(responseData);
        } else {
          setData([]);
        }
        console.log(responseData, 'data');
        setIsDataLoading(false);
      } catch (err) {
        console.log(err);
        setIsDataLoading(false);
      }
    };
    getData();
  }, [cleanUpContentData]);

  if (isDataLoading) return <p>Loading...</p>;

  console.log(data, 'data');
  
  return (

      <div className='pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 w-full bg-white mx-auto pt-28 ' id='utility'>
        <div className='max-w-7xl mx-auto mb-32 '>
          <div className='text-center'>
            <h2 className='text-3xl tracking-tight font-extrabold text-purple-900 sm:text-4xl mt-12'>
              Utility
            </h2>
            <p className='mt-3 max-w-2xl mx-auto font-bold text-xl text-pink-500 sm:mt-4'>
              Token utility for three distinct groups.
            </p>
          </div>
          <div>
            <h2 className='text-xl tracking-tight font-extrabold text-purple-900 sm:text-xl mt-12'>
              1. {data?.nftBuyersUtilityDescription}
            </h2>
            <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none'>
              {data.nftBuyersUtilityVisualDescription?.map((obj: any) => (
                <UtilityCard obj={obj} />
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-2xl tracking-tight font-extrabold text-pink-900 sm:text-2xl mt-12'>
              2. {data.advertisersUtilityDescription}.
            </h2>
            <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none'>
              {data.advertisersUtilityVisualDescription?.map((obj: any) => (
                <UtilityCard obj={obj} />
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-2xl tracking-tight font-extrabold text-purple-900 sm:text-2xl mt-12'>
              3.{data?.earlyAdoptersUtilityDescription}.
            </h2>
            <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none'>
              {data.earlyAdoptersUtilityVisualDescription?.map((obj: any) => (
                <UtilityCard obj={obj} />
              ))}
            </div>
          </div>
        </div>
      </div>

  );
}
