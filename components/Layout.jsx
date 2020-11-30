import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>{title}</title>
      </Head>
      <div className='container mx-auto pt-24'>{children}</div>
    </div>
  );
};

export default Layout;
