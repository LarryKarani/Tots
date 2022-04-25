// /* This example requires Tailwind CSS v2.0+ */
// import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid'

// const timeline = [
//     {
//         id: 1,
//         content: 'Lorem Ipsum',
//         target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
//         href: '#',
//         date: 'Sep 20',
//         datetime: '2020-09-20',
//         icon: CheckIcon,
//         iconBackground: 'bg-green-500'
//     },
//     {
//         id: 2,
//         content: 'Lorem Ipsum',
//         target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
//         href: '#',
//         date: 'Sep 22',
//         datetime: '2020-09-22',
//         icon: CheckIcon,
//         iconBackground: 'bg-gray-500'
//     },
//     {
//         id: 3,
//         content: 'Lorem Ipsum',
//         target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
//         href: '#',
//         date: 'Sep 28',
//         datetime: '2020-09-28',
//         icon: CheckIcon,
//         iconBackground: 'bg-gray-500'
//     },
//     {
//         id: 4,
//         content: 'Lorem Ipsum',
//         target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
//         href: '#',
//         date: 'Sep 30',
//         datetime: '2020-09-30',
//         icon: CheckIcon,
//         iconBackground: 'bg-gray-500'
//     },
//     {
//         id: 5,
//         content: 'Lorem Ipsum',
//         target: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
//         href: '#',
//         date: 'Oct 4',
//         datetime: '2020-10-04',
//         icon: CheckIcon,
//         iconBackground: 'bg-gray-500',
//     },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function Timeline() {
//     return (
//         <div className="flow-root py-32  bg-white" id='timeline'>
//             <h2 className='text-3xl text-center mb-12 tracking-tight font-extrabold text-purple-900 sm:text-4xl mt-5'>
//                 Timelines
//             </h2>
//             <div className='w-1/2  mx-auto'>
//             <ul role="list" className="-mb-8">
//                 {timeline.map((event, eventIdx) => (
//                     <li key={event.id}>
//                         <div className="relative pb-8">
//                             {eventIdx !== timeline.length - 1 ? (
//                                 <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
//                             ) : null}
//                             <div className="relative flex space-x-3">
//                                 <div>
//                                     <span
//                                         className={classNames(
//                                             event.iconBackground,
//                                             'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
//                                         )}
//                                     >
//                                         <event.icon className="h-5 w-5 text-black" aria-hidden="true" />
//                                     </span>
//                                 </div>
//                                 <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
//                                     <div>
//                                         <p className="text-sm text-black">
//                                             {event.content}{' '}
//                                             <a href={event.href} className="font-medium text-black">
//                                                 {event.target}
//                                             </a>
//                                         </p>
//                                     </div>
//                                     <div className="text-right text-sm whitespace-nowrap text-black font-bold ">
//                                         <time dateTime={event.datetime}>{event.date}</time>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//             </div>
//         </div>
//     )
// }


import { CheckIcon } from '@heroicons/react/solid'

const steps = [
    { id: '01', name: 'Job Details', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
    { id: '02', name: 'Application form', description: 'Cursus semper viverra.', href: '#', status: 'current' },
    { id: '03', name: 'Preview', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className='py-36 bg-white' id='timeline'>
            <h1 className='font-extrabold text-yellow-600 text-4xl mx-auto text-center my-3'>Timelines</h1>
        <div className=" lg:border-t lg:border-b lg:border-gray-200">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
                <ol
                    role="list"
                    className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none"
                >
                    {steps.map((step, stepIdx) => (
                        <li key={step.id} className="relative overflow-hidden lg:flex-1">
                            <div
                                className={classNames(
                                    stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                                    stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
                                    'border border-gray-200 overflow-hidden lg:border-0'
                                )}
                            >
                                {step.status === 'complete' ? (
                                    <a href={step.href} className="group">
                                        <span
                                            className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={classNames(
                                                stepIdx !== 0 ? 'lg:pl-9' : '',
                                                'px-6 py-5 flex items-start text-sm font-medium'
                                            )}
                                        >
                                            <span className="flex-shrink-0">
                                                <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full">
                                                    <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                                </span>
                                            </span>
                                            <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                                                <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                                                <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                            </span>
                                        </span>
                                    </a>
                                ) : step.status === 'current' ? (
                                    <a href={step.href} aria-current="step">
                                        <span
                                            className="absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={classNames(
                                                stepIdx !== 0 ? 'lg:pl-9' : '',
                                                'px-6 py-5 flex items-start text-sm font-medium'
                                            )}
                                        >
                                            <span className="flex-shrink-0">
                                                <span className="w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                                                    <span className="text-indigo-600">{step.id}</span>
                                                </span>
                                            </span>
                                            <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                                                <span className="text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                                                    {step.name}
                                                </span>
                                                <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                            </span>
                                        </span>
                                    </a>
                                ) : (
                                    <a href={step.href} className="group">
                                        <span
                                            className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={classNames(
                                                stepIdx !== 0 ? 'lg:pl-9' : '',
                                                'px-6 py-5 flex items-start text-sm font-medium'
                                            )}
                                        >
                                            <span className="flex-shrink-0">
                                                <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                                                    <span className="text-gray-500">{step.id}</span>
                                                </span>
                                            </span>
                                            <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                                                <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">{step.name}</span>
                                                <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                            </span>
                                        </span>
                                    </a>
                                )}

                                {stepIdx !== 0 ? (
                                    <>
                                        {/* Separator */}
                                        <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                                            <svg
                                                className="h-full w-full text-gray-300"
                                                viewBox="0 0 12 82"
                                                fill="none"
                                                preserveAspectRatio="none"
                                            >
                                                <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                                            </svg>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
        </div>
    )
}