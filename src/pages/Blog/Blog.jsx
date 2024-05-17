import { useContext, useEffect, useState } from 'react';
import { Footer, BlogNavbar, BlogPreview } from '../../components';
import { BlogContainer, BlogPostsNavigationContainer, BlogPostsNavigationButton } from './Blog.styles';
import { BlogLoader, Loader } from '../../common';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../../redux';
import { getPostData } from './utils';
import blogPostsIndex from './posts/index.json';

export const Blog = () => {
  const navigate = useNavigate();
  const context = useContext(BlogContext);
  const POST_PER_PAGE = 8;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const [currentPage, setCurrentPage] = useState(0);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [posts, setPosts] = useState([]);

  const onPostClick = (post) => {
    setIsLoadingPost(true);
    context.dispatch({ type: 'SET_CURRENT_POST', payload: post });
  };

  const onOlderPostsClick = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    setCurrentPostIndex(POST_PER_PAGE * newPage);
  };

  const onNewerPostsClick = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    setCurrentPostIndex(POST_PER_PAGE * newPage);
  };

  useEffect(() => {
    const actualPage = Number(urlParams.get('page')) ?? 0;
    const postsCached = context.getState().posts;

    if (postsCached.length > 0) {
      setPosts(postsCached);
    } else {
      Promise.all(blogPostsIndex.map((post) => getPostData(post))).then((posts) => {
        const sortedPosts = posts.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts);
        context.dispatch({ type: 'SET_POSTS', payload: sortedPosts });
      });
    }

    setCurrentPage(actualPage);
    setCurrentPostIndex(POST_PER_PAGE * actualPage);
  }, []);

  useEffect(() => {
    urlParams.set('page', currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newURL =
      window.location.protocol + '//' + window.location.host + window.location.pathname + '?page=' + currentPage;
    window.history.pushState({ path: newURL }, '', newURL);
  }, [currentPage]);

  useEffect(() => {
    if (isLoadingPost) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setIsLoadingPost(false);
        navigate(`/blog/${context.getState().currentPost.id}`, { replace: true });
      }, 1000 + Math.random() * 2000);
    }
  }, [isLoadingPost]);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      {isLoadingPost && <BlogLoader isLoading={isLoadingPost} />}

      <BlogNavbar />
      <BlogContainer>
        {posts.length > 0 &&
          [...posts]
            .slice(currentPostIndex, currentPostIndex + POST_PER_PAGE)
            .map((post, index) => <BlogPreview key={`post-${index}`} post={post} onClick={() => onPostClick(post)} />)}

        {
          <BlogPostsNavigationContainer>
            {(posts.length > POST_PER_PAGE && currentPage < posts.length / POST_PER_PAGE - 1 && (
              <BlogPostsNavigationButton onClick={onOlderPostsClick}>{'Older Posts >'}</BlogPostsNavigationButton>
            )) || <div></div>}
            {posts.length > POST_PER_PAGE && currentPage > 0 && (
              <BlogPostsNavigationButton onClick={onNewerPostsClick}>{'< Newer Posts'}</BlogPostsNavigationButton>
            )}
          </BlogPostsNavigationContainer>
        }
      </BlogContainer>
      <Footer />
    </>
  );
};
