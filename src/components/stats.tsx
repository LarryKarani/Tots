/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';

interface StatsProps {
  data: Data[];
  headline: string;
  color?: string;
}

interface Data {
  title: string;
  value: string;
 
}

const stats = [
  {
    name: 'Total Subscribers',
    stat: '71,897',
    previousStat: '70,946',
    change: '12%',
    changeType: 'increase',
  },
  {
    name: 'Avg. Open Rate',
    stat: '58.16%',
    previousStat: '56.14%',
    change: '2.02%',
    changeType: 'increase',
  },
  {
    name: 'Avg. Click Rate',
    stat: '24.57%',
    previousStat: '28.62%',
    change: '4.05%',
    changeType: 'decrease',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

        const Phase:React.FC<StatsProps> = ({data, headline, color}) => {

  return (
    <div className='px-5 bg-white mt-5'>
      <h3 className='text-lg leading-6 font-medium text-black'>
        {headline}
      </h3>
      <dl className='mt-2 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x'>
        {data?.map((item) => (
          <div key={item.title} className='px-4 py-2 sm:p-6'>
            <dt className='text-base font-normal text-black'>{item.title}</dt>
            <dd className='mt-1 flex justify-between items-baseline md:block lg:flex'>
              <div className={`flex items-baseline text-2xl font-semibold text-${color}-600`}>
                {item.value}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default Phase