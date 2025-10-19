import Chip from '@src/common/Chip';
import { BlogSteamLink } from '../BlogSteamLink/BlogSteamLink';
import { BlogPostAuthor, BlogPostContent, BlogPostContentText, BlogPostDate, BlogPostImage, BlogPostSubtitle, BlogPostTags, BlogPostTitle, BlogPostWrapper } from './BlogPost.styles';

export const BlogPost = ({ post }) => {
  const title = post?.title?.split('-')[0] ?? '';
  const subtitle = post?.title?.split('-')[1] ?? '';
  const date = post?.date ?? '';
  const author = post?.author ?? '';
  const image = post?.image ?? '';
  const tags = post?.tags ?? [];
  const html = post?.html ?? '';
  const steamLink = post?.steamlink ?? '';

  if (post === null) {
    return null;
  }

  return (
    <BlogPostWrapper>
      {image && <BlogPostImage src={image} />}
      {steamLink && <BlogSteamLink url={steamLink} />}
      <BlogPostContent>
        {title && <BlogPostTitle>{title?.trim()}</BlogPostTitle>}
        {subtitle && <BlogPostSubtitle>{subtitle?.trim()}</BlogPostSubtitle>}
        <span>
          {date && (
            <>
              <BlogPostDate>{date}</BlogPostDate> {' by '}
            </>
          )}
          {author && <BlogPostAuthor>{author}</BlogPostAuthor>}
        </span>
        <BlogPostTags>
          {tags?.map((tag) => (
            <Chip key={`tag-${tag}`} type={tag} />
          ))}
        </BlogPostTags>
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: We need to do this for Markdown to HTML conversion */}
        {html && <BlogPostContentText dangerouslySetInnerHTML={{ __html: html }} />}
      </BlogPostContent>
    </BlogPostWrapper>
  );
};
