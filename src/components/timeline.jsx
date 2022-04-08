/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid'

const timeline = [
    {
        id: 1,
        content: 'Lorem Ipsum',
        target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        href: '#',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: CheckIcon,
        iconBackground: 'bg-green-500'
    },
    {
        id: 2,
        content: 'Lorem Ipsum',
        target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: CheckIcon,
        iconBackground: 'bg-gray-500'
    },
    {
        id: 3,
        content: 'Lorem Ipsum',
        target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-gray-500'
    },
    {
        id: 4,
        content: 'Lorem Ipsum',
        target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: CheckIcon,
        iconBackground: 'bg-gray-500'
    },
    {
        id: 5,
        content: 'Lorem Ipsum',
        target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-gray-500',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Timeline() {
    return (
        <div className="flow-root py-32  bg-white" id='timeline'>
            <h2 className='text-3xl text-center mb-12 tracking-tight font-extrabold text-purple-900 sm:text-4xl mt-5'>
                Timelines
            </h2>
            <div className='w-1/2  mx-auto'>
            <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                    <span
                                        className={classNames(
                                            event.iconBackground,
                                            'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                        )}
                                    >
                                        <event.icon className="h-5 w-5 text-black" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                    <div>
                                        <p className="text-sm text-black">
                                            {event.content}{' '}
                                            <a href={event.href} className="font-medium text-black">
                                                {event.target}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="text-right text-sm whitespace-nowrap text-black font-bold ">
                                        <time dateTime={event.datetime}>{event.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}
