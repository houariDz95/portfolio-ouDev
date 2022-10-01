import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h2 className="text-[#5651e5]">EddDev</h2>
        <div>
          <ul className="hidden md:flex">
            <Link href="/"> 
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about"> 
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills"> 
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects"> 
              <li className="ml-10 text-sm uppercase hover:border-b">Project</li>
            </Link>
            <Link href="/#contact"> 
              <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} onClick={() => setShowMenu(true)}/>
          </div>
        </div>
        {showMenu && (
          <div className="fixed left-0 top-0 w-full h-screen lg:hidden md:hidden bg-black/70">
            <div 
            className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen 
            bg-[#ecf0f3] p-10 ease-in duration-500">
              <div>
                <div className="w-full flex justify-between items-center">
                  <h2 className="text-[#5651e5]">EddDev</h2>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <AiOutlineClose  onClick={() => setShowMenu(false)}/>
                  </div>
                </div>
                <div className="border-b border-gray-300 my-4">
                  <p className="w-[85%] md:w-[90%] py-4">Lets build something legendary togather</p>
                </div>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  <Link href="/">
                    <li onClick={() => setShowMenu(false)} className='py-4 text-sm'>Home</li>
                  </Link>
                  <Link href="/#about">
                    <li onClick={() => setShowMenu(false)} className='py-4 text-sm'>About</li>
                  </Link>
                  <Link href="/#skills">
                    <li onClick={() => setShowMenu(false)} className='py-4 text-sm'>Skills</li>
                  </Link>
                  <Link href="/#projects">
                    <li onClick={() => setShowMenu(false)} className='py-4 text-sm'>Projects</li>
                  </Link>
                  <Link href="/#contact">
                    <li onClick={() => setShowMenu(false)} className='py-4 text-sm'>Contact</li>
                  </Link>
                </ul>
                <div className="pt-4">
                  <p className="uppercase tracking-widest text-[#5651e5]">Lets Connect</p>
                  <div> 
                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                      ease-in duration-500"> 
                        <FaLinkedinIn />
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                      ease-in duration-500"> 
                        <FaGithub />
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                      ease-in duration-500"> 
                        <AiOutlineMail/>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                      ease-in duration-500"> 
                        <BsFillPersonLinesFill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar