import AuthorIntro from '../components/AuthorIntro';
import CardItem from '../components/CardItem';
import CardListItem from '../components/CardListItem';
import Layout from '../components/Layout';
import { getAllBlogs } from '../lib/api';
import Link from 'next/link';

const IndexPage = ({ blogs }) => {
  console.log(blogs);
  return (
    <Layout title='Home'>
      <AuthorIntro />
      <CardListItem />
      <CardItem blogs={blogs} />
    </Layout>
  );
};

export default IndexPage;

// This function is called during the build time
// It provides props to the page
// It will create static page
export const getStaticProps = async () => {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
};
