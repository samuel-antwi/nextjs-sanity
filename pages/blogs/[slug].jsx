import React from 'react';
import Layout from '../../components/Layout';
import { getBlog, getAllBlogs } from '../../lib/api';
import BlogContent from '../../components/BlogContent';

const BlogDetail = ({ blog }) => {
  const {
    author: { name, avatar },
    title,
    subtitle,
    created_at,
    coverImage,
    content,
  } = blog;

  return (
    <Layout>
      <div className='md:w-7/12 w-10/12 mx-auto'>
        <div className='flex items-center'>
          <img
            className='w-12 h-12 rounded-full mr-3'
            src={avatar}
            alt='Author avatar'
          />
          <p className='mr-2'>{name}</p>
          <p>{created_at}</p>
        </div>
        <div className='py-4'>
          <h1 className='text-xl'>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div>
          <img className='mb-5' src={coverImage} alt='' />
          <BlogContent content={content} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const blog = await getBlog(params.slug);
  return {
    props: { blog },
  };
};

export const getStaticPaths = async () => {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => ({ params: { slug: blog.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default BlogDetail;
