'use client';

import { usePosts } from '@/store';
import { shallow } from 'zustand/shallow';
import Link from 'next/link';
import { useEffect } from 'react';

const Posts = () => {
  const [posts, getPosts, loading] = usePosts(
    (state) => [state.posts, state.getPosts, state.loading],
    shallow,
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  //   getPosts();
  return (
    <ol>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))
      )}
    </ol>
  );
};

export default Posts;
