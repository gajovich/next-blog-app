'use client';

import { usePosts } from '@/store';
import { FormEventHandler, useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const getPostsSearch = usePosts((state) => state.getPostsSearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getPostsSearch(search);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
