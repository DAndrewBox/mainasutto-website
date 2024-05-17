import LoadingImage from '../../assets/images/loader.png';
import {
  BlogLoaderContainer,
  BlogLoaderContentContainer,
  BlogLoaderImage,
  BlogLoaderText,
  BlogLoaderWrapper,
} from './BlogLoader.styles';

export const BlogLoader = ({ isLoading, startActive = false }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <BlogLoaderWrapper startActive={startActive}>
      <BlogLoaderContainer>
        <BlogLoaderContentContainer>
          <BlogLoaderImage src={LoadingImage} />
          <BlogLoaderText>
            Loading <span>.</span>
            <span>.</span>
            <span>.</span>
          </BlogLoaderText>
        </BlogLoaderContentContainer>
      </BlogLoaderContainer>
    </BlogLoaderWrapper>
  );
};
