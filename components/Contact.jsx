import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
	return (
		<div id='contact' className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
				<p className='text-xl tracking-widest uppercase text-sky-700'>
					Contact
				</p>
				<h2 className='py-4'>
					Both advice and critics about my work are very welcome
				</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<div>
								<img
									className='rounded-xl hover:scale-105 ease-in duration-300'
									src='https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
									alt=''
								/>
							</div>
							<div>
								<br />
								<h2 className='py-2'>Athit Jatupatsakun</h2>
								<p>Junior Web Developer</p>
								<p className='italic text-sm'>
									Created this since 7th August 2022
								</p>
								<br />
								<p className='py-5'>
									I am currently looking for a full-time front-end job. Links to
									all those social media are dud and message forms to the right
									are not working...yet.
								</p>
								<p>
									I was hoping that I could use some more feedback from other
									professionals at the company I work with before trying to make
									this thing full-fledged. And I would gladly go an extra
									distance for other tools that I might lack for the job if
									needed.
								</p>
								<br />
								<p>
									Thank you so much for stopping by my website. For more detail
									about my background. Kindly refer to the attachments I sent
									you.
								</p>
								<br />
							</div>
							<br />

							<br />
							<div>
								<p className='uppercase pt-8'>Social Media</p>
								<div className='flex items-center justify-evenly py-4'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
										<FaLinkedinIn />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
										<FaGithub />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
										<AiOutlineMail />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='text'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='border-2 rounded-lg p-3 border-gray-300'
										rows='10'
									></textarea>
								</div>
								<button className='w-full p-4 text-gray-100 mt-4'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<HiOutlineChevronDoubleUp className='text-sky-700' size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
