
import React from 'react';
import Ecommerce from '../public/assets/projects/ecommerce.jpg';
import Estate from '../public/assets/projects/estate.jpg';
import Whatsapp from '../public/assets/projects/whatsapp.jpg';
import BlogImg from '../public/assets/projects/blog.jpg';
import UiImg from '../public/assets/projects/ui.jpg';
import ordering from '../public/assets/projects/ordering.jpg';
import Iqraa from '../public/assets/projects/iqraa.jpg';
import Portfolio from '../public/assets/projects/portfolio.png';
import PersonalBlog from '../public/assets/projects/personal-blog.png'

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
            title='Oumat Iqraa Library'
            backgroundImg={Iqraa}
            projectUrl='/iqraa'
            tech='NextJs nodejs tailwind'
          />
          <ProjectItem
            title='Breath  Blog'
            backgroundImg={PersonalBlog}
            projectUrl='/breath'
            tech='NextJs mongoDb tailwind css'
          />
          <ProjectItem
            title='Thoughtful Words Blog'
            backgroundImg={BlogImg}
            projectUrl='/blog'
            tech='NextJs Firebase Tailwind'
          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={Portfolio}
            projectUrl='/portfolio'
            tech='React js tailwind css Framer motion'
          />
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
            title='Ui/Ux Landing Page'
            backgroundImg={UiImg}
            projectUrl='/landingUi'
            tech='React Js'
          />
          <ProjectItem
            title='Full stack ordering app '
            backgroundImg={ordering}
            projectUrl='/ordering'
            tech='NextJs mongoDb Redux'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;