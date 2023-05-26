import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
     
      const navigation = [
        
    { name: 'Daily', href: '/Daily', current: false  },
    { name: 'Days', href: '/Days  ', current: false },
    { name: 'Festivals', href: '/Festivals2', current: false },
    { name: 'Bussiness categories', href: '/Businesscategories', current: false },
    { name: 'Blogs', href: '/blogs', current: false },
    { name: 'Sign up|Login', href: '/signup', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    return (
        <Disclosure as="nav" className="bg-blue-400">
            {({ open }) => (
                <>
                    <div className=" mx-auto   fixed top-0 w-full bg-blue-600 text-5xl px-2 sm:px-6  lg:px-8">
                        <div className=" relative flex  h-20 font-extrabold items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex text-6xl items-center justify-center  w-14  ml-10 mr-16 rounded-md p-2 text-white font-bold hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className=" block h-8 w-6 pl-0" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className=" block h-8 w-6 pl-0 " aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                           
                 
                    <div className="flex mr-6 ">
                    
                        <Link to="/"><img
                          src="./assets/images/brandzi app icon-01.png"
                          className="h-24 w-28 pb-4"

                          alt=""
                        /></Link>
                    
                    </div>
                  
                            <div className="flex  flex-1 items-center lg:justify-center sm:items-stretch sm:justify-center">
                                
                                <div className="hidden  sm:block ">
                                     
                                            <div className="flex lg:ml- space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray text-white' : 'text-white no-underline hover:bg-blue-500 hover:text-white',
                                                            'rounded-md px-3 py-3 text-base font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>

                                       

                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                               
                            </div>
                        </div>
                    </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  
  );
};

export default Navbar;
