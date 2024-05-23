import { Chip } from '@common';
import {
  BlogPreviewAuthor,
  BlogPreviewContainer,
  BlogPreviewContent,
  BlogPreviewContentContainer,
  BlogPreviewDate,
  BlogPreviewImage,
  BlogPreviewSeparator,
  BlogPreviewTitle,
  BlogPreviewWrapper,
} from './BlogPreview.styles';

export const BlogPreview = ({ post, onClick }) => {
  const handlePostClick = () => {
    if (!onClick) return;
    onClick(post);
  };

  return (
    <>
      <BlogPreviewWrapper onClick={handlePostClick}>
        <BlogPreviewContainer>
          <BlogPreviewImage src={post.image} />
          <BlogPreviewContentContainer>
            <BlogPreviewTitle>{post.titlePreview}</BlogPreviewTitle>
            <span>
              <span>
              <BlogPreviewDate>{post.date}</BlogPreviewDate>
              {' by '}
              <BlogPreviewAuthor>{post.author}</BlogPreviewAuthor>
              </span>
              <span>
              {' • '}
              </span>
              <span>
              {post.tags.map((tag) => (
                <Chip key={`post-${post.id}-tag-${tag}`} type={tag} />
              ))}
              </span>

            </span>

            <BlogPreviewContent dangerouslySetInnerHTML={{ __html: post.preview }} />
          </BlogPreviewContentContainer>
        </BlogPreviewContainer>
      </BlogPreviewWrapper>

      <BlogPreviewSeparator />
    </>
  );
};
