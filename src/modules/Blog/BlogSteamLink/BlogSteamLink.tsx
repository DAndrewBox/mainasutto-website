import { useTranslation } from '@utils/i18n';
import { BlogSteamLinkUrl, BlogSteamLinkWrapper } from './BlogSteamLink.styles';

interface BlogSteamLinkProps {
  url: string;
}

export const BlogSteamLink = ({ url }: BlogSteamLinkProps) => {
  const { t } = useTranslation();

  return (
    <BlogSteamLinkWrapper>
      <BlogSteamLinkUrl href={url}>{t('blog_read_on_steam')}</BlogSteamLinkUrl>
    </BlogSteamLinkWrapper>
  );
};

export default BlogSteamLink;
