import React from 'react';
import Image from 'next/image';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
const cryptotable = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={cryptoImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
					<h2 className='py-2'>Crypto Table Website</h2>
					<h3>React JS / Tailwind CSS / Firebase</h3>
				</div>
			</div>
			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
				<div className='col-span-4'>
					<h2>Overview</h2>
					<br />
					<p>
						I built this app to demonstrate knowledge working in React JS and
						accessing API endpoints ( Coin Gecko API ). This app was built using
						React JS and is hosted and authenticate users by Firebase. Users are
						able to create a new account using their email address and can then
						sign in to save coins to a user specific list. This is made possible
						by creating a firestore cloud storage database at the time of user
						registration. Another feature of this application is dynamic routing
						through the &quot;React Router DOM&quot; package.
					</p>
					<a
						href='https://github.com/Madinalake97/crypto-app'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 mr-8'>Code</button>
					</a>
					<a href='https://tun-crypto.web.app' target='_blank' rel='noreferrer'>
						<button className='px-8 py-2 mt-4'>Demo</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center font-bold text-xl pb-2'>Tools</p>
					</div>
					<div className='grid grid-cols-3 md:grid-cols-1'>
						<p className='text-gray-600 py-2 flex items-center  '>
							<RiRadioButtonFill className='pr-1' />
							React
						</p>
						<p className='text-gray-600 py-2 flex items-center '>
							<RiRadioButtonFill className='pr-1' />
							JavaScript
						</p>
						<p className='text-gray-600 py-2 flex items-center '>
							<RiRadioButtonFill className='pr-1' />
							Tailwind CSS
						</p>
						<p className='text-gray-600 py-2 flex items-center '>
							<RiRadioButtonFill className='pr-1' />
							Firebase
						</p>
						<p className='text-gray-600 py-2 flex items-center '>
							<RiRadioButtonFill className='pr-1' />
							Coin Gecko API
						</p>
					</div>
				</div>
				<Link href='/#projects'>
					<a className='underline cursor-pointer'>Go back</a>
				</Link>
			</div>
		</div>
	);
};

export default cryptotable;
