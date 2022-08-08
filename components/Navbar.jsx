import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import navLogo from '../public/assets/navLogo.png';
const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkColor, setLinkColor] = useState('#1f2937');
	const router = useRouter();

	useEffect(() => {
		if (
			router.asPath === '/realestate' ||
			router.asPath === '/cryptotable' ||
			router.asPath === '/netflick' ||
			router.asPath === '/loginui'
		) {
			setNavBg('transparent');
			setLinkColor('#ecf0f3');
		} else {
			setNavBg('#ecf0f3');
			setLinkColor('#1f2937');
		}
	}, [router]);
	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);
	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100]'
					: 'fixed w-full h-20 z-[100]'
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
					<Image
						className='cursor-pointer'
						src={navLogo}
						alt='/'
						width='185'
						height='45'
					/>
				</Link>
				<div>
					<ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase border-b-4 border-transparent hover:border-sky-700'>
								Home
							</li>
						</Link>
						<Link href='/#about'>
							<li className='ml-10 text-sm uppercase border-b-4 border-transparent hover:border-sky-700'>
								About
							</li>
						</Link>
						<Link href='/#skills'>
							<li className='ml-10 text-sm uppercase border-b-4 border-transparent hover:border-sky-700'>
								Skills
							</li>
						</Link>
						<Link href='/#projects'>
							<li className='ml-10 text-sm uppercase border-b-4 border-transparent hover:border-sky-700'>
								Projects
							</li>
						</Link>
						<Link href='/#contact'>
							<li className='ml-10 text-sm uppercase border-b-4 border-transparent hover:border-sky-700'>
								Contact
							</li>
						</Link>
					</ul>

					{/* MOBILE MENU */}
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				onClick={handleNav}
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 w-[85%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] w-[85%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
					}
				>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Link href='/'>
								<Image src={navLogo} alt='/' width='150' height='35' />
							</Link>
							<div
								onClick={handleNav}
								className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='md:w-[90%] py-4'>
								Good to have you here. Let&apos;s build something.
							</p>
						</div>
					</div>
					<div className='flex flex-col py-7'>
						<ul className='uppercase'>
							<Link href='/'>
								<li className='py-4 text-sm'>Home</li>
							</Link>
							<Link href='/#about'>
								<li className='py-4 text-sm'>About</li>
							</Link>
							<Link href='/#skills'>
								<li className='py-4 text-sm'>Skills</li>
							</Link>
							<Link href='/#projects'>
								<li className='py-4 text-sm'>Projects</li>
							</Link>
							<Link href='/#contact'>
								<li className='py-4 text-sm'>Contact</li>
							</Link>
						</ul>
						<div className='pt-28'>
							<p className='uppercase tracking-widest text-sky-800'>
								Let&apos;s connect
							</p>
							<div className='flex items-center justify-evenly'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaLinkedin />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaGithub />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<AiOutlineMail />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
