
import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
//import { Link } from 'react-router-dom';
import Tots from '../tots.png'
import { Link } from 'react-scroll';
import NavDropDown from './DropDown';
import { Disclosure, Menu} from '@headlessui/react';


const navigation = [
  { name: 'About', href: 'home', current: true},
  { name: 'Utility', href: 'utility', current: false },
  { name: 'Metrics and Tokenomics', href: 'tokenomics', current: false },
  { name: 'Timeline', href: 'timeline', current: false },
  { name: 'Team', href: 'team', current: false},
];

const setCurrent = (name: string) => {


}

const options = [

  {name: 'Tokenomics', path: 'tokenomics'},
  { name: 'Mission', path: 'mission' },
  { name: 'Allocation Breakdown', path: 'break-down' },
  { name: 'Expenses', path: 'expenses' },
];

// const Navbar = () => {
//   return (
//     <div className='relative bg-black content-center sticky top-0 z-50 py-5'>
//       <Popover as='header' className='relative'>
//         <div className='bg-black pt-6 '>
//           <nav
//             className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
//             aria-label='Global'
//           >
//             <div className='flex items-center flex-1 justify-center'>
//               <div className='flex items-center justify-between w-full md:w-auto'>
//                 <Link to='home' activeClass='active' spy={true} smooth={true}>
//                   <span className='sr-only'>Tots</span>
//                   <img className='h-8 w-auto sm:h-10' src={Tots} alt='' />
//                 </Link>
//                 <div className='-mr-2 flex items-center md:hidden'>
//                   <Popover.Button className='bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
//                     <span className='sr-only'>Open main menu</span>
//                     <MenuIcon className='h-6 w-6' aria-hidden='true' />
//                   </Popover.Button>
//                 </div>
//               </div>
//               <div className='hidden space-x-8 md:flex md:ml-10 cursor-pointer'>
//                 {navigation.map((item) =>
//                 { 
//                   if (item.name === 'Metrics and Tokenomics'){
//                     return <NavDropDown options={options}/>
//                   }
//                     return (
//                       <Link
//                         key={item.name}
//                         spy={true}
//                         smooth={true}
//                         to={item.href}
//                         className='text-base font-medium text-white hover:text-gray-300'
//                       >
//                         {item.name}
//                       </Link>
//                     );})}
//               </div>
//             </div>
//           </nav>
//         </div>

//         <Transition
//           as={Fragment}
//           enter='duration-150 ease-out'
//           enterFrom='opacity-0 scale-95'
//           enterTo='opacity-100 scale-100'
//           leave='duration-100 ease-in'
//           leaveFrom='opacity-100 scale-100'
//           leaveTo='opacity-0 scale-95'
//         >
//           <Popover.Panel
//             focus
//             className='absolute z-10 top-0 inset-x-0 p-2 bg-black transition transform origin-top md:hidden'
//           >
//             <div className='rounded-lg shadow-md bg-black ring-1 ring-gray ring-opacity-5 overflow-hidden '>
//               <div className='px-5 pt-4 flex items-center justify-between'>
//                 <div>
//                   <Link to='home' activeClass='active' spy={true} smooth={true}>
//                     <span className='sr-only'>Tots</span>
//                     <img className='h-8 w-auto sm:h-10' src={Tots} alt='' />
//                   </Link>
//                 </div>
//                 <div className='-mr-2'>
//                   <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'>
//                     <span className='sr-only'>Close menu</span>
//                     <XIcon className='h-6 w-6' aria-hidden='true' />
//                   </Popover.Button>
//                 </div>
//               </div>
//             </div>
//           </Popover.Panel>
//         </Transition>
//       </Popover>
//     </div>
//   );
// }

// export default Navbar

/* This example requires Tailwind CSS v2.0+ */


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
 
  const [current , setCurrent] = useState('About')

  return (
    <Disclosure
      as='nav'
      className='relative bg-black content-center sticky top-0 z-50 py-5'
    >
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between mx-auto h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-center'>
                <div className='flex-shrink-0 flex items-center'>
                  <img
                    className='block lg:hidden h-8 w-auto'
                    src={Tots}
                    alt='Workflow'
                  />
                  <img
                    className='hidden lg:block h-8 w-auto'
                    src={Tots}
                    alt='Workflow'
                  />
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => {
                      if (item.name === 'Metrics and Tokenomics') {
                        return <NavDropDown options={options} />;
                      }
                      return (
                        <Link
                          key={item.name}
                          spy={true}
                          smooth={true}
                          onClick={() => setCurrent(item.name)}
                          to={item.href}
                          className={classNames(
                            item.name === current
                              ? 'bg-gray-900 text-yellow-600'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'text-base font-medium text-white px-2 py-1 hover:text-gray-300 cursor-pointer'
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <Menu as='div' className='ml-3 relative'>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div> */}
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  onClick={() => setCurrent(item.name)}
                  className={classNames(
                    item.name === current
                      ? 'bg-gray-900 text-yellow-600 border round'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name === 'Metrics and Tokenomics' ? (
                    <NavDropDown options={options} />
                  ) : (
                    item.name
                  )}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
