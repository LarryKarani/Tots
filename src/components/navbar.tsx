
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
//import { Link } from 'react-router-dom';
import Tots from '../tots.png'
import { Link } from 'react-scroll';
import NavDropDown from './DropDown';


const navigation = [
  { name: 'About', href: 'home' },
  { name: 'Utility', href: 'utility' },
  { name: 'Metrics and Tokenomics', href: 'tokenomics' },
  { name: 'Timeline', href: 'timeline' },
  { name: 'Team', href: 'team' },
];

const options = [

  {name: 'Tokenomics', path: 'tokenomics'},
  { name: 'Mission', path: 'mission' },
  { name: 'Allocation Breakdown', path: 'break-down' },
  { name: 'Expenses', path: 'expenses' },
];

const Navbar = () => {
  return (
    <div className='relative bg-black content-center sticky top-0 z-50 py-5'>
      <Popover as='header' className='relative'>
        <div className='bg-black pt-6 '>
          <nav
            className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
            aria-label='Global'
          >
            <div className='flex items-center flex-1 justify-center'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <Link to='home' activeClass='active' spy={true} smooth={true}>
                  <span className='sr-only'>Tots</span>
                  <img className='h-8 w-auto sm:h-10' src={Tots} alt='' />
                </Link>
                <div className='-mr-2 flex items-center md:hidden'>
                  <Popover.Button className='bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='hidden space-x-8 md:flex md:ml-10 cursor-pointer'>
                {navigation.map((item) =>
                { 
                  if (item.name === 'Metrics and Tokenomics'){
                    return <NavDropDown options={options}/>
                  }
                    return (
                      <Link
                        key={item.name}
                        spy={true}
                        smooth={true}
                        to={item.href}
                        className='text-base font-medium text-white hover:text-gray-300'
                      >
                        {item.name}
                      </Link>
                    );})}
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute z-10 top-0 inset-x-0 p-2 bg-black transition transform origin-top md:hidden'
          >
            <div className='rounded-lg shadow-md bg-black ring-1 ring-gray ring-opacity-5 overflow-hidden '>
              <div className='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <Link to='home' activeClass='active' spy={true} smooth={true}>
                    <span className='sr-only'>Tots</span>
                    <img className='h-8 w-auto sm:h-10' src={Tots} alt='' />
                  </Link>
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Navbar