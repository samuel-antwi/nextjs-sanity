import BlockContent from '@sanity/block-content-to-react';
import CodeHighlighter from './CodeHighlighter';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <div className='py-5'>
          <CodeHighlighter language={language}>
            {code}
            <div>{filename}</div>
          </CodeHighlighter>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => {
  return (
    <BlockContent
      imageOptions={{ w: 320, h: 240, fit: 'max' }}
      serializers={serializers}
      blocks={content}
    />
  );
};

export default BlogContent;
