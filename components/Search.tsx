'use client';

import { fetchPostsSearch } from '@/services';
import { FormEventHandler, useState } from 'react';

type Props = {
  onSearch: (value: any[]) => void;
};

const Search = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const posts = await fetchPostsSearch(search);
    onSearch(posts);
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
