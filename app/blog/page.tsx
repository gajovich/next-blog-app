'use client';

import Posts from '@/components/Posts';
import Search from '@/components/Search';
import { fetchPosts } from '@/services';
import { Metadata } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
      } catch (error: any) {
        setError(error.message);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <Search onSearch={setPosts} />
      {error ? <h2>{error}</h2> : <Posts posts={posts} />}
    </>
  );
};

export default Blog;
