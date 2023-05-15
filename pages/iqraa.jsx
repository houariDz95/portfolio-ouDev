import Image from 'next/image';
import React from 'react';
import IqraaImg from '../public/assets/projects/iqraa.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const blog = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={IqraaImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Blog</h2>
          <h3>NextJs / Firebase / React Js / Tailwind Css</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            our app built with Next.js 13 and Node.js! With our app, users can easily download their 
            favorite books in PDF and EPUB formats. Our app is built with a responsive design, making 
            it easy to use on any device. We have also integrated a powerful web scraper to gather data
            from various sources to ensure that our users have access to the latest books available.
             Whether you're an avid reader or a student looking for reference material, our app is the 
            perfect solution for all your reading needs. Try it out today and enjoy your favorite books 
            on the go!"
          </p>
          <a
            href='https://github.com/houariDz95/oumat-iqra-lib'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 disabled'>Code</button>
          </a>
          <a
            href='https://github.com/houariDz95/book-lib.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 disabled'>Back end Code</button>
          </a>
          <a
            href='https://oumat-iqra-lib.vercel.app/categories/business'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> nodeJs
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material Ui
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Nextjs 13
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default blog;