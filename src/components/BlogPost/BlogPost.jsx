import { Chip } from '../../common';
import {
  BlogPostContent,
  BlogPostImage,
  BlogPostWrapper,
  BlogPostTitle,
  BlogPostDate,
  BlogPostAuthor,
  BlogPostContentText,
  BlogPostTags,
} from './BlogPost.styles';

export const BlogPost = ({ post }) => {
  const title = post?.title ?? '';
  const date = post?.date ?? '';
  const author = post?.author ?? '';
  const image = post?.image ?? '';
  const tags = post?.tags ?? [];
  const html = post?.html ?? '';

  return (
    <BlogPostWrapper>
      {image && <BlogPostImage src={image} />}
      <BlogPostContent>
        {title && <BlogPostTitle>{title}</BlogPostTitle>}
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
