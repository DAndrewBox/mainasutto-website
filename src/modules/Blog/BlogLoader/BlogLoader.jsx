import LoadingImage from '@assets/images/loader.webp';

import { BlogLoaderContainer, BlogLoaderContentContainer, BlogLoaderImage, BlogLoaderText, BlogLoaderUrl, BlogLoaderWrapper } from './BlogLoader.styles';
import { useTranslation } from 'react-i18next';

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
