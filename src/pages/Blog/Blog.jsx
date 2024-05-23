import { useContext, useEffect, useState } from 'react';
import { BlogNavbar, BlogPreview, BlogLoader } from '~/modules';
import { BlogContainer, BlogPostsNavigationContainer, BlogPostsNavigationButton } from './Blog.styles';
import { Loader, Footer } from '@common';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '@store';
import { getPostData } from './utils';
import blogPostsIndex from '@posts/index.json';
import { CommonPage } from '../Pages.styles';

export const Blog = () => {
  const navigate = useNavigate();
  const context = useContext(BlogContext);
  const POST_PER_PAGE = 8;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const [currentPage, setCurrentPage] = useState(0);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [firstTimeLoad, setFirstTimeLoad] = useState(true);
  const [posts, setPosts] = useState([]);

  const onPostClick = (post) => {
    setIsLoadingPosts(true);
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
    setFirstTimeLoad(false);
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

  useEffect(() => {
    if (isLoadingPosts === true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setIsLoadingPosts(false);
        navigate(`/blog/${context.getState().currentPost.id}`, { replace: true });
      }, Math.random() * 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingPosts]);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <CommonPage>
      {(firstTimeLoad || isLoadingPosts) && <BlogLoader isLoading />}
      {isLoading && <Loader isLoading={isLoading} />}

      <BlogNavbar />
      <BlogContainer>
        {posts.length > 0 &&
          [...posts]
            .slice(currentPostIndex, currentPostIndex + POST_PER_PAGE)
            .map((post, index) => <BlogPreview key={`post-${index}`} post={post} onClick={() => onPostClick(post)} />)}

        {
          <BlogPostsNavigationContainer>
            {(posts.length > POST_PER_PAGE && currentPage < posts.length / POST_PER_PAGE - 1 && (
              <BlogPostsNavigationButton onClick={onOlderPostsClick}>
                <span>{'Older Posts'}</span> <span>{'>'}</span>
              </BlogPostsNavigationButton>
            )) || <div></div>}
            {posts.length > POST_PER_PAGE && currentPage > 0 && (
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
