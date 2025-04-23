import React from 'react';
import { NewspaperIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    id: 1,
    title: "Understanding BMI: What the Numbers Mean",
    summary: "Body Mass Index (BMI) is a simple measurement that uses your height and weight to work out if your weight is healthy. Learn how to interpret your BMI results and what they mean for your health.",
    link: "#tools",
    date: "2023-05-20",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How to Calculate Your Mortgage Payments",
    summary: "Understanding mortgage payments is crucial when planning to buy a home. Learn about the factors that affect your monthly payments and how to calculate them accurately.",
    link: "#mortgage-calculator",
    date: "2023-05-18",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "The Power of Compound Interest",
    summary: "Discover how compound interest can work in your favor and why it's often called the eighth wonder of the world. Learn how to calculate it and use it for your financial planning.",
    link: "#compound-calculator",
    date: "2023-05-15",
    readTime: "6 min read"
  },
];

const BlogPost = ({ post }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          <a href={post.link} className="hover:text-blue-900 dark:hover:text-blue-400">
            {post.title}
          </a>
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.summary}
        </p>
        <a
          href={post.link}
          className="text-blue-900 dark:text-blue-400 hover:underline font-medium inline-flex items-center"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <NewspaperIcon className="h-12 w-12 mx-auto mb-4 text-blue-900 dark:text-blue-500" />
          <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover tips, guides, and insights about personal finance and calculations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
