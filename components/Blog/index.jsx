import React from 'react';
import Link from 'next/link';

// Blog Data
import posts from './data/data.js';

// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiCalendar, BiTime } from "react-icons/bi";

const Blog = () => {
  return (
    <div className="max-w-6xl m-auto p-4 pt-8 px-2 sm:pt-20" id="blog">
      <h1 className="text-4xl text-sky-500 font-bold sm:text-5xl">#Blog & Articles</h1>
      <p className="text-sm text-sky-500 font-semibold mt-4 mb-8 leading-6">
        Sharing insights on backend development, system architecture, and performance optimization.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="bg-sky-900 rounded-lg p-6 flex flex-col transition ease-in-out duration-150 hover:bg-sky-800"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <BiCalendar />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <BiTime />
                    {post.readTime}
                  </span>
                </div>

                <span className="inline-block bg-sky-500 text-white text-xs px-3 py-1 rounded-full font-semibold mb-3">
                  {post.category}
                </span>

                <h2 className="text-xl text-white font-bold mb-3 leading-tight">
                  {post.title}
                </h2>

                <p className="text-gray-300 text-sm leading-6">
                  {post.excerpt}
                </p>
              </div>

              <Link href={`/blog/${post.id}`}>
                <a className="py-2 px-4 bg-white mt-6 text-black ease-in-out duration-150 border-2 border-white rounded-md hover:bg-gray-900 hover:border-gray-900 hover:text-white w-full flex justify-between items-center gap-1 font-semibold text-sm cursor-pointer">
                  <span>Read More</span>
                  <HiOutlineArrowNarrowRight />
                </a>
              </Link>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Blog;
