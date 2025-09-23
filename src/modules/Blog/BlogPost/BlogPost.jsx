import { Chip } from '@common';
import {
  BlogPostContent,
  BlogPostImage,
  BlogPostWrapper,
  BlogPostTitle,
  BlogPostDate,
  BlogPostAuthor,
  BlogPostContentText,
  BlogPostTags,
  BlogPostSubtitle,
} from './BlogPost.styles';
import { BlogSteamLink } from '../BlogSteamLink/BlogSteamLink';

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
        <BlogPostTags>{tags && tags.map((tag) => <Chip key={`tag-${tag}`} type={tag} />)}</BlogPostTags>
        {html && <BlogPostContentText dangerouslySetInnerHTML={{ __html: html }} />}
      </BlogPostContent>
    </BlogPostWrapper>
  );
};
