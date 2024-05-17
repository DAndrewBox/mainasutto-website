import styled from 'styled-components';

export const BlogPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--color-bg-primary);
  width: 80%;
  padding: 0.875rem 0.5rem;
  min-height: 10rem;
  transition: all 0.2s ease-in;
  justify-content: flex-start;

  &:first-child {
    margin-top: 1.5rem;
  }

  &:nth-of-type(even) {
    & > div {
      flex-direction: row-reverse;
      text-align: right;
      & > div > span {
        justify-content: flex-end;
      }
    }
  }

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

export const BlogPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  height: 11rem;
  overflow: hidden;
`;

export const BlogPreviewContentContainer = styled.div`
  flex: 7;

  & > span {
    display: flex;
    justify-content: flex-start;
    gap: 0.35rem;
    font-size: 0.875rem;
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
    align-items: top;
    border-bottom: 1px dashed #cccccce0;
    margin-bottom: 0.5rem;

    & > p {
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }
`;

export const BlogPreviewImage = styled.div`
  flex: 3;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 0.25rem;
`;

export const BlogPreviewTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  margin: 0.25rem 0;
`;

export const BlogPreviewDate = styled.p`
  margin: 0.25rem 0;
  font-weight: 700;
`;

export const BlogPreviewAuthor = styled.p`
  color: #a62d67;
  font-weight: 700;
`;

export const BlogPreviewContent = styled.div`
  & > * {
    font-size: 0.875rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    color: #333;

    img {
      transform: translateY(-0.125rem);
      max-width: 100%;
    }
  }
`;

export const BlogPreviewSeparator = styled.hr`
  width: 80%;
  height: 1px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 1rem 0;

  &:last-of-type {
    display: none;
  }
`;
