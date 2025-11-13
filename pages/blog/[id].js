import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import blogData from '../../components/Blog/data/data';

// React Icons
import { BiArrowBack, BiCalendar, BiTime } from 'react-icons/bi';

const BlogPost = ({ post }) => {
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Blog post not found</p>
      </div>
    );
  }

  const renderContent = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-gray-300 leading-8 mb-6">
            {block.text}
          </p>
        );

      case 'heading':
        const HeadingTag = `h${block.level}`;
        const headingClass = block.level === 2
          ? 'text-3xl font-bold text-white mt-12 mb-6'
          : 'text-2xl font-bold text-white mt-8 mb-4';
        return React.createElement(
          HeadingTag,
          { key: index, className: headingClass },
          block.text
        );

      case 'list':
        return (
          <ul key={index} className="list-disc list-inside text-gray-300 leading-8 mb-6 space-y-2">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      case 'code':
        return (
          <div key={index} className="mb-6">
            <pre className="bg-sky-950 border border-sky-800 rounded-lg p-6 overflow-x-auto">
              <code className="text-sky-200 text-sm font-mono leading-6">
                {block.text}
              </code>
            </pre>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | Ahsanul Hoque Famid</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="author" content={post.author} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-900 min-h-screen">
        <Navbar />

        <main className="max-w-4xl m-auto p-4 pt-8 px-2 sm:pt-12">
          {/* Back Button */}
          <Link href="/#blog">
            <a className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-400 transition duration-150 mb-8">
              <BiArrowBack />
              <span>Back to Blog</span>
            </a>
          </Link>

          {/* Article Header */}
          <article>
            <header className="mb-12">
              <div className="mb-4">
                <span className="inline-block bg-sky-500 text-white text-sm px-4 py-1 rounded-full font-medium">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-white mb-6 leading-tight sm:text-5xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <BiCalendar className="text-sky-500" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiTime className="text-sky-500" />
                  <span>{post.readTime}</span>
                </div>
                {post.author && (
                  <div>
                    <span>By {post.author}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-sky-800"></div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.map((block, index) => renderContent(block, index))}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-sky-800">
              <Link href="/#blog">
                <a className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-400 transition duration-150">
                  <BiArrowBack />
                  <span>Back to all posts</span>
                </a>
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

// Generate static paths for all blog posts
export async function getStaticPaths() {
  const paths = blogData.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Fetch blog post data
export async function getStaticProps({ params }) {
  const post = blogData.find((p) => p.id === params.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
