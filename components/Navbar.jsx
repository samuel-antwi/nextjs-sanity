import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-gray-200'>
      <div className='container mx-auto flex justify-between p-4 text-gray-900'>
        <Link href='/'>SAMUEL ANTWI</Link>
        <Link href='/about'>ABOUT</Link>
      </div>
    </div>
  );
};

export default Navbar;
