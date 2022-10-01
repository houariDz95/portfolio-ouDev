import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Ecommerce from '../public/assets/projects/ecommerce.jpg';
import Estate from '../public/assets/projects/estate.jpg'
import Whatsapp from '../public/assets/projects/whatsapp.jpg'
import BlogImg from '../public/assets/projects/blog.jpg'
import Blog from './ProjectItem';
import ProjectItem from './ProjectItem';
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='E-commerce stripe'
            backgroundImg={Ecommerce}
            projectUrl='/ecommerce'
            tech='Next JS'
          />
          <ProjectItem
            title='Real Estate'
            backgroundImg={Estate}
            projectUrl='/estateApp'
            tech='Next JS'

          />
          <ProjectItem
            title='Whatsapp clone'
            backgroundImg={Whatsapp}
            projectUrl='/whatsapp'
            tech='Next JS'

          />
          <ProjectItem
            title='Blog App'
            backgroundImg={BlogImg}
            projectUrl='/blog'
            tech='MERN Stack'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;