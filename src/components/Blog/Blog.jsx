import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {

	console.log(blog)



	return (
		<div className='m-2'>

			<div className="card bg-base-100 w-96 shadow-sm">
				<figure>
					<img
						src={blog.cover}
						alt="blog cover image" />
				</figure>


				<div className="card-body">

					<div className="author flex justify-around items-center">
						<h3>{blog.author}</h3>
						<img className='w-12 h-12 rounded-full' src={blog.author_img} ></img>

						<FaBookmark size={25}/>

					</div>
					<h2 className="card-title">{blog.title}</h2>
					<p>{blog.des}</p>

					<div className="flex justify-center items-center">
						{
							blog.hashtags.map((has) => <p>{has}</p>)
						}
					</div>

					<div className="card-actions justify-end">

						<button className="btn btn-primary">Mark as read</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;