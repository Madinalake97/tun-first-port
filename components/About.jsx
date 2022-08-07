import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/me.jpg';
import Link from 'next/link';
const About = () => {
	return (
		<div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-sky-700'>
						About
					</p>
					<h2 className='py-4'>I&apos;ll just be real with you here.</h2>
					<p className='text-gray-600'>
						...Or{' '}
						<Link href='/#projects'>
							<a className='text-gray-600 underline font-bold cursor-pointer'>
								click here
							</a>
						</Link>
						. If you feel like want to just skip the monologue and see my
						projects.
						<br />
						<br />
					</p>
					<p className='text-gray-600'>
						Felt burned out searching for jobs in a field that is offering fewer
						jobs than it had ever since the pandemic. And even fewer jobs that
						don&apos;t require candidates to uproot themselves in return for no
						more than a one-year contract. I wasn&apos;t sure what I wanted to
						do next besides the career in aviation.
					</p>
					<br />
					<p className='text-gray-600'>
						With all those trends going on in the job seeker communities,
						convinced me to look into the world of IT. And over time, I&apos;ve
						found myself drawn to web development sector.
					</p>
					<br />
					<p className='text-gray-600'>
						Amazed by how programming skills can offer such excellent and
						everlasting career options. I started to think of a way to learn the
						skills necessary to make this actually happen. Nowadays I am working
						on creating a responsive front-end web application while learning
						some other technologies for a Full stack Dev career.
					</p>
					<br />
					<p className='text-gray-600'>
						Long story short, I am not your traditional developer. But my strong
						intentions of contributing myself will eventually make up for it.
					</p>
					<br />
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-md flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image src={AboutImg} className='rounded-xl bg-contain' alt='/' />
				</div>
			</div>
		</div>
	);
};

export default About;
