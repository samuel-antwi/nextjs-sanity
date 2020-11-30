import Link from 'next/link';

const CardItem = ({ blogs }) => {
  return (
    <div className='md:grid grid-cols-3 gap-10'>
      {blogs.map((blog) => {
        const {
          title,
          created_at,
          author: { avatar, name },
          coverImage,
          subtitle,
          slug,
        } = blog;
        console.log(slug);
        return (
          <Link key={blog.title} href={`/blogs/${slug}`}>
            <a className='bg-gray-100 text-gray-900  shadow-md rounded mt-10  p-3'>
              <div className='flex'>
                <img
                  className='w-12 h-12 rounded-full mr-3'
                  src={avatar}
                  alt='Avatar'
                />
                <span>
                  <p>{name}</p>
                  <p className='text-gray-400 text-sm'>{created_at}</p>
                </span>
              </div>
              <div className='bg-gray-400 w-full mt-3'>
                <img src={coverImage} alt='' />
              </div>
              <div className='pt-4'>
                <h2 className='text-xl'>{title}</h2>
                <p>{subtitle}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default CardItem;
