import { useTranslation } from '@utils/i18n';
import { BlogSteamLinkUrl, BlogSteamLinkWrapper } from './BlogSteamLink.styles';

export const BlogSteamLink = ({ url }) => {
  const { t } = useTranslation();

  return (
    <BlogSteamLinkWrapper>
      <BlogSteamLinkUrl href={url}>{t('blog_read_on_steam')}</BlogSteamLinkUrl>
    </BlogSteamLinkWrapper>
  );
};
