const AuthorIntro = () => {
  return (
    <div className='flex text-gray-100'>
      <img
        className='w-16 h-16 rounded-full mr-3'
        src='https://media-exp1.licdn.com/dms/image/C4D03AQGHo_1p5UMvGA/profile-displayphoto-shrink_400_400/0/1597360438604?e=1611792000&v=beta&t=oLGxKHGJONfLL8hUqzdnQFd5FWLWK4QVjO6wV5_v0PA'
        alt='avatar'
      />
      <div className='max-w-2xl'>
        <p>Hello friends</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit beatae, quibusdam veritatis excepturi veniam a nobis
          repudiandae voluptas inventore quos.
        </p>
      </div>
    </div>
  );
};

export default AuthorIntro;
