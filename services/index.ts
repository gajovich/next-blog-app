export const fetchPosts = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!data.ok) throw new Error('Oooops sumthing goes wrong');

  return data.json();
};

export const fetchPostsSearch = async (search: any) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);

  if (!data.ok) throw new Error('Oooops sumthing goes wrong');

  return data.json();
};
