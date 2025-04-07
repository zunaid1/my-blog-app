import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
	// console.log(handleBookMark)

	return (
		<div className="m-2 border-[3px] border-gray-200">
			<div className="card bg-base-100 shadow-sm">
				<figure>
					<img src={blog.cover} alt="blog cover image" />
				</figure>

				<div className="card-body">
					<div className="author flex justify-around items-center">
						<h3>{blog.author}</h3>
						<img className="w-12 h-12 rounded-full" src={blog.author_img}></img>

						<button onClick={() => handleBookMark(blog)}>
							<FaBookmark size={25} />
						</button>
					</div>
					<h2 className="card-title">{blog.title}</h2>
					<p>{blog.des}</p>

					<div className="flex justify-center items-center">
						{blog.hashtags.map((has, index) => (
							<p
								key={index}
								className="bg-blue-400 m-2 p-1 rounded-xl text-white"
							>{has}
							</p>
						))}
					</div>

					<div className="card-actions justify-between items-center">
						<h2 className="bg-blue-400 p-2 rounded-full text-white">
							{blog.reading_time}
						</h2>
						<button
							onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}
							className="btn btn-primary"
						>
							Mark as read
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
