import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '@store/BlogProvider';
import { BlogNavbar, BlogPost, BlogLoader } from '~/modules';
import { BlogContainer, BlogPostsNavigationButton, BlogPostsNavigationContainer } from './Blog.styles';
import blogPostsIndex from '@posts/index.json';
import { getPostData } from './utils';
import { Footer } from '@common';
import { CommonPage } from '../Pages.styles';

export const BlogPostPage = () => {
  const { postID: postId } = useParams();
  const context = useContext(BlogContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState(null);
  const [previousPost, setPreviousPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [postIdChanged, setPostIdChanged] = useState(false);

  const handlePreviousPostClick = () => {
    window.scrollTo({ top: 0 });
    setIsLoading(true);
    navigate(`/blog/${previousPost.date}`);
    setPreviousPost(null);
    setNextPost(null);
    setPostIdChanged(true);
  };

  const handleNextPostClick = () => {
    window.scrollTo({ top: 0 });
    setIsLoading(true);
    navigate(`/blog/${nextPost.date}`);
    setPreviousPost(null);
    setNextPost(null);
    setPostIdChanged(true);
  };

  const getCurrentPostData = async () => {
    // If post data is already available in the context, set the post data.
    const post = context.getState().currentPost;

    if (post && post?.id === postId) {
      setPostData(post);
      return;
    }

    // Sort the blog posts index by date in ascenting order.
    blogPostsIndex.sort((post1, post2) => Number(post1.date) - Number(post2.date));

    // Fetch the post data if it is not available in the context.
    const postIndex = blogPostsIndex.findIndex((post) => Number(post.date) === Number(postId));
    if (postIndex < 0) {
      setPostData({ title: 'Not Found', html: '<p>The post you are looking for does not exist.</p>' });
      setIsLoading(false);
      return;
    }

    await Promise.resolve(getPostData(blogPostsIndex[postIndex])).then((postDataParsed) => {
      context.dispatch({ type: 'SET_CURRENT_POST', payload: postDataParsed });
      setPostData(postDataParsed);

      // Set the previous and next post data.
      const previousPostIndex = postIndex - 1;
      const nextPostIndex = postIndex + 1;

      if (previousPostIndex >= 0) {
        setPreviousPost(blogPostsIndex[previousPostIndex]);
      }

      if (nextPostIndex < blogPostsIndex.length) {
        setNextPost(blogPostsIndex[nextPostIndex]);
      }

      setIsLoading(false);
    });
  };

  useEffect(() => {
    getCurrentPostData();
  }, []);

  useEffect(() => {
    if (postIdChanged) {
      getCurrentPostData();
      setPostIdChanged(false);
    }
  }, [postIdChanged]);

  const NavigationSection = () =>
    !isLoading && (previousPost || nextPost) ? (
      <BlogPostsNavigationContainer width={'100%'}>
        {(previousPost && (
          <BlogPostsNavigationButton onClick={handlePreviousPostClick}>
            <span>{`${previousPost.title}`}</span>
            <span>{'>'}</span>
          </BlogPostsNavigationButton>
        )) || <div></div>}
        {nextPost && (
          <BlogPostsNavigationButton onClick={handleNextPostClick}>
            <span>{'<'}</span>
            <span>{`${nextPost.title}`}</span>
          </BlogPostsNavigationButton>
        )}
      </BlogPostsNavigationContainer>
    ) : null;

  return (
    <CommonPage>
      <BlogNavbar />
      <BlogLoader isLoading={isLoading} />

      <BlogContainer>
        <BlogPost post={postData} />
        <NavigationSection />
      </BlogContainer>
      <Footer />
    </CommonPage>
  );
};
