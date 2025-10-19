import type { chipTypes } from '@src/common/Chip/Chip.helpers';
import { createContext } from 'react';
import { legacy_createStore as createStore } from 'redux';

export interface BlogPost {
  title: string;
  author?: string;
  date: number | string;
  image: string;
  filepath?: string;
  tags?: (keyof typeof chipTypes)[];
  steamlink?: string;
  id?: string;
  html?: string;
  content?: string;
}

export interface BlogState {
  posts?: BlogPost[];
  currentPost?: BlogPost;
}

export interface BlogAction {
  type: 'SET_POSTS' | 'SET_CURRENT_POST';
  payload: BlogState;
}

export interface BlogStore {
  getState: () => BlogState;
  dispatch: (action: BlogAction) => void;
}

const BlogInitialState: BlogState = {
  posts: [],
  currentPost: {
    title: '',
    content: '',
    image: '',
    date: '',
    author: '',
    id: '',
  },
};

const BlogReducer = (state = BlogInitialState, action = undefined) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'SET_CURRENT_POST':
      return {
        ...state,
        currentPost: action.payload,
      };
    default:
      return state;
  }
};

export const BlogContext = createContext(BlogInitialState as BlogStore);
export const BlogProvider = ({ children }) => {
  const BlogStore = createStore(BlogReducer, BlogInitialState);
  return <BlogContext.Provider value={BlogStore}>{children}</BlogContext.Provider>;
};
