import Posts from '@/components/Posts';
import Search from '@/components/Search';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <Search />
      <Posts />
    </>
  );
};

export default Blog;
