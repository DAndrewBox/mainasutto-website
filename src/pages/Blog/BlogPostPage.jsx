import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '@store/BlogProvider';
import { BlogNavbar, BlogPost, BlogLoader } from '~/modules';
import {
  BlogContainer,
  BlogPostsNavigationButton,
  BlogPostsNavigationContainer,
  NewsletterContainer,
  NewsletterTitle,
} from './Blog.styles';
import { getPostData } from './utils';
import { Footer } from '@common';
import { CommonPage } from '../Pages.styles';
import { MailchimpForm } from '@common';

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
    navigate(`/blog/${previousPost.id}`);
    setPreviousPost(null);
    setNextPost(null);
    setPostIdChanged(true);
  };

  const handleNextPostClick = () => {
    window.scrollTo({ top: 0 });
    setIsLoading(true);
    navigate(`/blog/${nextPost.id}`);
    setPreviousPost(null);
    setNextPost(null);
    setPostIdChanged(true);
  };

  const getCurrentPostData = async () => {
    setIsLoading(true);
    // If post data is already available in the context, set the post data.
    const post = context.getState().currentPost;
    if (post && post?.id === postId) {
      setPostData(post);
      return;
    }

    // Fetch the blog posts index from the context.
    try {
      const postRes = await getPostData(postId);
      context.dispatch({ type: 'SET_CURRENT_POST', payload: postRes.post });
      setPostData(postRes.post);
      setPreviousPost(postRes.previousPost);
      setNextPost(postRes.nextPost);
    } catch (error) {
      setPostData({ title: 'Not Found', html: '<p>The post you are looking for does not exist.</p>' });
      console.error('Error fetching post data', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
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

        {/* Insert newsletter subscribe */}
        {postData?.tags.includes('NEWSLETTER') && (
          <NewsletterContainer>
            <NewsletterTitle>Want to get a TLDR version of the newsletter every month?</NewsletterTitle>
            <MailchimpForm />
          </NewsletterContainer>
        )}

        <NavigationSection />
      </BlogContainer>
      <Footer />
    </CommonPage>
  );
};
