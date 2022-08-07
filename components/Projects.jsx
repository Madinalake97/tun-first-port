import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cryptoprojectImg from '../public/assets/projects/crypto.jpg';
import loginuiprojectImg from '../public/assets/projects/loginui.jpg';
import netflickprojectImg from '../public/assets/projects/netflick.jpg';
import realestateprojectImg from '../public/assets/projects/realestate.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-sky-700'>
					Projects
				</p>
				<h2 className='py-4'>
					There will be more to come. Please come by every once in a while.
				</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title='Crypto Table'
						backgroundImg={cryptoprojectImg}
						projectUrl='/cryptotable'
					/>
					<ProjectItem
						title='Login UI'
						backgroundImg={loginuiprojectImg}
						projectUrl='/loginui'
					/>
					<ProjectItem
						title='Netflick'
						backgroundImg={netflickprojectImg}
						projectUrl='/netflick'
					/>
					<ProjectItem
						title='Real Estate Website'
						backgroundImg={realestateprojectImg}
						projectUrl='/realestate'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
