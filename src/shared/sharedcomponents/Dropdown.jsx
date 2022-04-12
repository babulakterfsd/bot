/* eslint-disable react/jsx-props-no-spreading */
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';

function Dropdown({ name }) {
    return (
        <div className="w-full">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="flex justify-between w-full pr-4 pl-12 lg:px-4 text-sm font-medium text-white bg-[#1b1423] rounded-md ">
                        {name}
                        <ChevronDownIcon
                            className="w-5 h-5 ml-12 lg:ml-32 -mr-1 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-black text-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                <div className=" text-white text-center px-2 py-1 cursor-pointer hover:bg-darkishBlack ">
                                    Test Account 1
                                </div>
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {() => (
                                    <div className=" text-white text-center px-2 py-1 cursor-pointer hover:bg-darkishBlack ">
                                        Test Account 2
                                    </div>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

export default Dropdown;
