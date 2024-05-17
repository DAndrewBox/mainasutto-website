import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '../../redux/BlogProvider';
import { BlogNavbar, BlogPost, Footer } from '../../components';
import { BlogContainer, BlogPostsNavigationButton, BlogPostsNavigationContainer } from './Blog.styles';
import blogPostsIndex from './posts/index.json';
import { fetchPostData } from './utils';
import { BlogLoader } from '../../common';

export const BlogPostPage = () => {
  const context = useContext(BlogContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState({});
  const [previousPost, setPreviousPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const { postID: postId } = useParams();

  const handlePreviousPostClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/blog/${previousPost.date}`);
      setPreviousPost(null);
      setNextPost(null);
    }, 500);
  };

  const handleNextPostClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/blog/${nextPost.date}`);
      setPreviousPost(null);
      setNextPost(null);
    }, 500);
  };

  useEffect(() => {
    // If post data is already available in the context, set the post data.
    const post = context.getState().currentPost;
    if (post && post.id === postId) {
      setPostData(post);
      return;
    }

    // Fetch the post data if it is not available in the context.
    const postIndex = blogPostsIndex.findIndex((post) => Number(post.date) === Number(postId));
    if (postIndex < 0) {
      setPostData({ title: 'Not Found', html: '<p>The post you are looking for does not exist.</p>' });
      setIsLoading(false);
      return;
    }

    Promise.resolve(fetchPostData(blogPostsIndex[postIndex])).then((postDataParsed) => {
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

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  }, [postId]);

  const NavigationSection = () =>
    !isLoading && (previousPost || nextPost) ? (
      <BlogPostsNavigationContainer width={'100%'}>
        {(previousPost && (
          <BlogPostsNavigationButton onClick={handlePreviousPostClick}>
            {`${previousPost.title} >`}
          </BlogPostsNavigationButton>
        )) || <div></div>}
        {nextPost && (
          <BlogPostsNavigationButton onClick={handleNextPostClick}>{`< ${nextPost.title}`}</BlogPostsNavigationButton>
        )}
      </BlogPostsNavigationContainer>
    ) : null;

  return (
    <div>
      <BlogNavbar />
      <BlogContainer>
        <BlogLoader isLoading={isLoading} startActive />
        {!isLoading && <BlogPost post={postData} />}

        <NavigationSection />
      </BlogContainer>
      <Footer />
    </div>
  );
};
