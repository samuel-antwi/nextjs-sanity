import client from './sanity';
const blogFields = `
title,
 subtitle,
'slug': slug.current,
 created_at,
 'coverImage': coverImage.asset->url,
'author': author->{name, 'avatar': avatar.asset->url},
content[]{..., 'asset': asset->}

`;

export const getAllBlogs = async () => {
  const results = await client.fetch(`*[_type == 'blog']{${blogFields}}`);
  return results;
};

export const getBlog = async (slug) => {
  const results = await client.fetch(
    `*[_type == 'blog' && slug.current == $slug]{
    ${blogFields}
  }`,
    { slug }
  );
  return results[0];
};
