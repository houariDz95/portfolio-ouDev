import Image from 'next/image';
import React from 'react';
import Portfolio from '../public/assets/projects/portfolio.png';
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
          src={Portfolio}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Portfolio</h2>
          <h3>Framer Motion / React Js / Tailwind Css</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The portfolio is a beautifully designed and interactive website showcasing a developer&apos;s or designer&apos;s work and skills. Built with the power of React, Tailwind CSS, and Framer Motion, it combines modern technology with stunning visuals and smooth animations to create an engaging user experience. <br />
            The portfolio&apos;s user interface is clean, intuitive, and responsive, ensuring a seamless browsing experience across devices. Tailwind CSS, a utility-first CSS framework, provides a solid foundation for designing the layout and styling components. With its extensive set of pre-built utility classes, the portfolio can be easily customized to match the creator&apos;s unique style and branding.<br />
            To enhance the visual appeal and bring the portfolio to life, Framer Motion, a powerful animation library for React, is integrated. With Framer Motion, elements on the portfolio page animate smoothly, adding a touch of interactivity and delight to the user experience. From subtle transitions to more complex animations, Framer Motion enables dynamic effects that grab attention and make the portfolio stand out. <br />
            The portfolio showcases the creator&apos;s projects, skills, and experience in a visually compelling manner. Each project is presented with captivating imagery, concise descriptions, and relevant details. Visitors can explore the projects, view live demos, and access additional information to gain a comprehensive understanding of the creator&apos;s capabilities.<br />
            The portfolio also includes sections highlighting the creator&apos;s skills, educational background, work experience, and contact information. Through thoughtfully designed UI components, visitors can easily navigate the portfolio, access relevant sections, and get in touch with the creator for potential collaborations or inquiries.<br />
            In summary, the portfolio created with React, Tailwind CSS, and Framer Motion combines modern design principles, responsive layouts, stunning visuals, and captivating animations. It effectively showcases the creator&apos;s work and skills, leaving a memorable impression on visitors while providing an immersive and enjoyable user experience.<br />
          </p>
          <a
            href='https://github.com/houariDz95/portfolio-app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 disabled'>Code</button>
          </a>
          <a
            href='https://my-portfolio-houaridz95.vercel.app/'
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
                <RiRadioButtonFill className='pr-1' /> Framer Motion
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