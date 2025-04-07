import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

	const Blogs = ({handleBookMark, handleMarkAsRead}) => {
		const [blogs, setBlogs]= useState([])


		useEffect(()=> {
		fetch("blogs.json")
		.then(res => res.json())
		.then(data => setBlogs(data))

	}, [])

// console.log(blogs)

	return (
		<div className='flex flex-col md:flex-row lg:flex-row flex-wrap'>
			<div className='all-blogs sm:flex sm:flex-col md:grid md:grid-cols-2'>
				{
					blogs.map(blog => 
					<Blog 
					key={blog.id} 
					blog={blog} 
					handleBookMark={handleBookMark}
					handleMarkAsRead={handleMarkAsRead}

					>

					</Blog>)
				}
			</div>
			
		</div>
	);
};

export default Blogs;