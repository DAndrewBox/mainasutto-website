import styled from 'styled-components';

export const BlogPostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BlogPostImage = styled.img`
  width: calc(100% + 2rem);
  margin-top: -1rem;
  max-height: 30rem;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    max-height: 20rem;
  }
`;

export const BlogPostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: center;
  width: 97.5%;
  padding: 2rem 1rem;

  & > span {
    border-bottom: 1px solid #ccc;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 0.875rem;
  }
`;

export const BlogPostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-bg-primary);
  margin-bottom: 0.5rem;
  margin-top: 0;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const BlogPostSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-bg-primary);
  margin-bottom: 0.5rem;
  margin-top: 0;
  letter-spacing: 0.025rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const BlogPostDate = styled.span`
  margin: 0.25rem 0;
  font-weight: 700;
`;

export const BlogPostAuthor = styled.span`
  color: #a62d67;
  font-weight: 700;
`;

export const BlogPostTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;

export const BlogPostContentText = styled.div`
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  color: var(--color-bg-primary);
  margin-top: 2.5rem;
  max-width: 100%;

  p {
    margin-block-start: 0;
  }

  code {
    background-color: #ccc;
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
  }

  pre code {
    display: block;
    background-color: #ccc;
    padding: 0.5rem;
    border-radius: 0.25rem;
    line-height: 1.25;
    font-size: 0.875rem;
  }

  blockquote {
    background-color: #dddddddd;
    border-left: 0.2rem solid #bbb;
    padding-left: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;
    line-height: 1.125rem;
    font-size: 0.875rem;
    padding-bottom: 0.5rem;

    & > ul {
      padding-inline-start: 0;
      margin-block-start: 0;
      margin-block-end: 0;
      list-style-type: none;
      margin: 0;
    }

    & > p {
      margin: 0;
      padding-top: 0.5rem;
      font-weight: 700;
      font-family: 'Open Sans', sans-serif;
      color: var(--color-bg-secondary);
      letter-spacing: 0.025rem;
    }
  }

  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1.25rem;

    video {
      max-width: 100%;
      margin-top: 0.5rem;
      border-radius: 0.25rem;
    }

    & > p {
      font-size: 0.875rem;
      font-weight: 700;
      font-family: 'Open Sans', sans-serif;
      color: var(--color-bg-secondary);
      letter-spacing: 0.025rem;
      margin: 0;
      margin-top: 0.25rem;
      padding: 0;

      img {
        max-width: 100%;
        margin-top: 0.5rem;
        border-radius: 0.25rem;
      }
    }

    iframe {
      max-width: 100%;
    }

    &.x2 > p > img {
      zoom: 2;
    }
  }

  .grid-50-50 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1rem 0;
    justify-items: center;
    align-items: center;
    justify-content: center;
    width: 100%;

    img,
    video {
      width: 100%;
      border-radius: 0.25rem;
    }
  }

  iframe {
    width: 800px;
    height: 450px;
    margin: 0.5rem 0;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
    border-bottom: 1px solid var(--color-bg-primary);

    &:hover {
      border-bottom: 2px solid var(--color-bg-primary);
    }
  }

  h2 {
    text-spacing: 0.125rem;
    margin-bottom: 0.5rem;
  }

  h3,
  h4 {
    margin-bottom: 0;
  }

  hr {
    border-color: #cccccc40;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 0.875rem;

    iframe {
      width: 100%;
      height: 200px;
    }
  }
`;
