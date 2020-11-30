import React from 'react';

const CardListItem = () => {
  return (
    <div className='bg-gray-100 text-gray-900 max-w-4xl shadow-md rounded mt-10'>
      <div className='flex p-3'>
        <img
          className='w-12 h-12 rounded-full mr-3'
          src='https://media-exp1.licdn.com/dms/image/C4D03AQGHo_1p5UMvGA/profile-displayphoto-shrink_400_400/0/1597360438604?e=1611792000&v=beta&t=oLGxKHGJONfLL8hUqzdnQFd5FWLWK4QVjO6wV5_v0PA'
          alt=''
        />
        <span>
          <p>Placeholder Author</p>
          <p className='text-gray-400 text-sm'>Placeholder date</p>
        </span>
      </div>
      <hr />
      <div className='p-3'>
        <h1>Placeholder Title</h1>
        <p>Placeholder Subtitle</p>
      </div>
    </div>
  );
};

export default CardListItem;
