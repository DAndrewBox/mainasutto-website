import { useContext, useEffect, useState } from 'react';
import { BlogNavbar, BlogPreview, BlogLoader } from '~/modules';
import { BlogContainer, BlogPostsNavigationContainer, BlogPostsNavigationButton } from './Blog.styles';
import { Loader, Footer } from '@common';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '@store';
import { getPostsPerPage } from './utils';
import { CommonPage } from '../Pages.styles';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    urlParams.set('page', currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newURL =
      window.location.protocol + '//' + window.location.host + window.location.pathname + '?page=' + currentPage;
    window.history.pushState({ path: newURL }, '', newURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {posts.length > 0 &&
          [...posts].map((post, index) => (
            <BlogPreview key={`post-${index}`} post={post} onClick={() => onPostClick(post)} />
          ))}

        {
          <BlogPostsNavigationContainer>
            {(hasOlderPage && (
              <BlogPostsNavigationButton onClick={onOlderPostsClick}>
                <span>{'Older Posts'}</span> <span>{'>'}</span>
              </BlogPostsNavigationButton>
            )) || <div></div>}
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
