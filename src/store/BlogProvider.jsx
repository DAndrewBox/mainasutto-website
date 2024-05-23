import { createContext } from 'react';
import { legacy_createStore as createStore } from 'redux';

const BlogInitialState = {
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

const BlogReducer = (state = BlogInitialState, action) => {
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

export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const BlogStore = createStore(BlogReducer, BlogInitialState);
  return <BlogContext.Provider value={BlogStore}>{children}</BlogContext.Provider>;
};
