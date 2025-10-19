import LoadingImage from '@assets/images/loader.webp';
import { useTranslation } from '@src/utils/i18n';
import { BlogLoaderContainer, BlogLoaderContentContainer, BlogLoaderImage, BlogLoaderText, BlogLoaderUrl, BlogLoaderWrapper } from './BlogLoader.styles';

export const BlogLoader = ({ isLoading, caption = 'loader_text_loading', redirectUrl = null }) => {
  const { t } = useTranslation();

  if (!isLoading) {
    return null;
  }

  return (
    <BlogLoaderWrapper $isLoading={isLoading}>
      <BlogLoaderContainer>
        <BlogLoaderContentContainer>
          <BlogLoaderImage src={LoadingImage} />
          <BlogLoaderText>
            {t(caption)} <span>.</span>
            <span>.</span>
            <span>.</span>
          </BlogLoaderText>
          {redirectUrl && <BlogLoaderUrl href={redirectUrl}>{t('loader_text_too_long')}</BlogLoaderUrl>}
        </BlogLoaderContentContainer>
      </BlogLoaderContainer>
    </BlogLoaderWrapper>
  );
};

export default BlogLoader;
