type PostProps = {
  params: {
    id: string;
  };
};

const getData = async (id: string) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return data.json();
};

export const generateMetadata = async ({ params: { id } }: PostProps) => {
  const post = await getData(id);

  return {
    title: post.title,
  };
};

const Post = async ({ params: { id } }: PostProps) => {
  const post = await getData(id);

  return (
    <>
      <h6>Post {post.id}</h6>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
