import { createContext } from 'react';
import { legacy_createStore as createStore } from 'redux';

interface BlogPost {
  title: string;
  author?: string;
  date: number | string;
  image: string;
  filepath?: string;
  tags?: string[];
  steamLink?: string;
  id?: string;
  content?: string;
}

interface BlogState {
  posts: BlogPost[];
  currentPost: BlogPost;
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

export const BlogContext = createContext({});
export const BlogProvider = ({ children }) => {
  const BlogStore = createStore(BlogReducer, BlogInitialState);
  return <BlogContext.Provider value={BlogStore}>{children}</BlogContext.Provider>;
};
