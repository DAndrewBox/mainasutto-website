import { Footer, Loader } from '@common';
import { BlogContext } from '@store';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogLoader, BlogNavbar, BlogPreview } from '~/modules';
import { CommonPage } from '../Pages.styles';
import { BlogContainer, BlogPostsNavigationButton, BlogPostsNavigationContainer } from './Blog.styles';
import { getPostsPerPage } from './utils';

export const Blog = () => {
  const navigate = useNavigate();
  const context = useContext(BlogContext);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const [currentPage, setCurrentPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [hasNewerPage, setHasNewerPage] = useState(false);
  const [hasOlderPage, setHasOlderPage] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  const onPostClick = (post) => {
    setIsLoadingPosts(true);
    context.dispatch({ type: 'SET_CURRENT_POST', payload: post });

    setTimeout(() => {
      navigate(`/blog/${post.id}`);
    }, 1000);
  };

  const onOlderPostsClick = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    handleNewPage(newPage);
  };

  const onNewerPostsClick = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    handleNewPage(newPage);
  };

  const handleNewPage = async (page) => {
    setIsLoadingPosts(true);
    try {
      const newPosts = await getPostsPerPage(page);
      setCurrentPage(page);
      setPosts(newPosts?.posts || []);
      setHasNewerPage(newPosts?.hasNewerPage || false);
      setHasOlderPage(newPosts?.hasOlderPage || false);
      context.dispatch({ type: 'SET_POSTS', payload: newPosts?.posts || [] });
    } finally {
      setIsLoadingPosts(false);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Only on mount
  useEffect(() => {
    const actualPage = Number(urlParams.get('page')) ?? 0;
    const postsCached = context.getState().posts;

    if (postsCached.length > 0) {
      setIsLoadingPosts(true);
      setPosts(postsCached);
      setCurrentPage(actualPage);
      setIsLoadingPosts(false);
      return;
    }

    handleNewPage(actualPage);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Only when currentPage changes
  useEffect(() => {
    urlParams.set('page', currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}?page=${currentPage}`;
    window.history.pushState({ path: newURL }, '', newURL);
  }, [currentPage]);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <CommonPage>
      {isLoadingPosts && <BlogLoader isLoading />}
      {isLoading && <Loader isLoading={isLoading} />}

      <BlogNavbar />
      <BlogContainer>
        {posts.length > 0 && [...posts].map((post) => <BlogPreview key={`post-${post.date}`} post={post} onClick={() => onPostClick(post)} />)}

        {
          <BlogPostsNavigationContainer>
            {(hasOlderPage && (
              <BlogPostsNavigationButton onClick={onOlderPostsClick}>
                <span>{'Older Posts'}</span> <span>{'>'}</span>
              </BlogPostsNavigationButton>
            )) || <div />}
            {hasNewerPage && (
              <BlogPostsNavigationButton onClick={onNewerPostsClick}>
                <span>{'<'}</span> <span>{'Newer Posts'}</span>
              </BlogPostsNavigationButton>
            )}
          </BlogPostsNavigationContainer>
        }
      </BlogContainer>
      <Footer />
    </CommonPage>
  );
};
