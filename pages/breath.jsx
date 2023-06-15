import Image from 'next/image';
import React from 'react';
import PersonalBlog from '../public/assets/projects/personal-blog.png';
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
          src={PersonalBlog}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Blog</h2>
          <h3>NextJs / MongoDb / React Js / Tailwind Css</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Welcome to Breath, a captivating sports, calmness, and relaxation blog powered by 
            the latest technologies. Built with Next.js 13, our blog offers a seamless and immersive 
            browsing experience, ensuring fast load times and optimal performance. The modern and responsive 
            design, crafted with Tailwind CSS, creates an aesthetically pleasing interface that adapts beautifully across devices.
            At Breath, we delve into the synergy between sports and tranquility, exploring the profound impact of mindfulness 
            and relaxation techniques on athletic performance and overall well-being. Through insightful articles, practical 
            tips, and inspiring stories, we guide you on a journey of self-discovery, helping you unlock your true potential 
            on and off the field.
            <br /> <br />
            To access the admin page and take control of your blog, simply visit: Admin Page: 
            <a href="https://personal-blog-app-six.vercel.app/admine"
            target='_blank'
            rel='noreferrer'
            className='underline text-blue-600 cursor-pointer'
            >https://personal-blog-app-six.vercel.app/admine</a> 
            and use the following credentials:
            Email: houarieddrief7@gmail.com
            Password: 123123 
            <br />  <br />
            With Breath, you have the freedom to express yourself, connect with your audience, and make your mark in the digital world. 
            Let&#39;s explore the exciting features that make our app stand out:
            <br />  <br />
            Easy Article Creation: Composing and publishing blog articles has never been easier. Our intuitive interface allows you to
            effortlessly create and format your articles, giving you full control over the content and styling. Express your thoughts, 
            share your expertise, and captivate your readers with engaging and visually appealing articles
            <br />  <br />
            Email Subscription: Build a loyal readership by offering email subscriptions. Allow your audience to stay updated with
            your latest posts, ensuring they never miss a beat. With our built-in email subscription feature, you can effortlessly
            manage and communicate with your subscribers, fostering a strong connection with your readers.
            Efficient Article Management: Manage your blog content with ease. Our app provides a comprehensive article management
             system, allowing you to edit, update, and delete articles seamlessly. Stay organized and maintain a polished blog that
              showcases your best work.
            <br />  <br />
            Admin Panel: Take full control of your blog with our user-friendly admin panel. Log in securely and access exclusive
             features tailored specifically for administrators. From managing user accounts to moderating comments, our admin panel
              empowers you to efficiently oversee every aspect of your blog.
            <br />  <br />
            Robust User Authentication: Safeguard your blog and user data with our secure authentication system. We utilize 
            industry-standard practices to protect user accounts and ensure a safe environment for both bloggers and readers.
            <br />  <br />
            Responsive Design: Your blog deserves to look stunning across all devices. Our app is built with a responsive design 
            approach, ensuring that your blog will look and function flawlessly on desktops, tablets, and mobile devices. Your 
            readers can enjoy a seamless browsing experience no matter how they access your blog.
            <br />  <br />
            Powered by MongoDB: Leverage the power and scalability of MongoDB as our database solution. With its 
            flexibility and efficiency, you can trust that your blog data is stored securely and retrieved quickly, providing a 
            smooth user experience.
          </p>
          <a
            href='https://github.com/houariDz95/personal-blog-app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 disabled'>Code</button>
          </a>
          <a
            href='https://personal-blog-app-six.vercel.app/'
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
                <RiRadioButtonFill className='pr-1' /> framer motion
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDb
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Nextjs 13
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mailchimp
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