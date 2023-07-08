import { fetchPosts, fetchPostsSearch } from '@/services';
import { create } from 'zustand';

type Props = {
  posts: any[];
  loading: boolean;
  getPosts: () => Promise<void>;
  getPostsSearch: (search: string) => Promise<void>;
};

export const usePosts = create<Props>()((set) => ({
  posts: [],
  loading: false,
  getPosts: async () => {
    set({ loading: true, posts: await fetchPosts() });
    set({ loading: false });
  },
  getPostsSearch: async (search) => {
    set({ loading: true, posts: await fetchPostsSearch(search) });
    set({ loading: false });
  },
}));
