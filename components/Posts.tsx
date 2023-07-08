import Link from 'next/link';

const Posts = ({ posts }: { posts: any[] }) => {
  return (
    <ol>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ol>
  );
};

export default Posts;
