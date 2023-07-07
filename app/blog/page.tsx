import { Metadata } from 'next';
import Link from 'next/link';

const getData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!data.ok) throw new Error('Oooops sumthing goes wrong');

  return data.json();
};

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

const Blog = async () => {
  const posts = await getData();
  return (
    <>
      <h1>Blog</h1>
      <ol>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Blog;
