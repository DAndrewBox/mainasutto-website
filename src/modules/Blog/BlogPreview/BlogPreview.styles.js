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

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 90%;

    &:nth-of-type(even) {
      & > div {
        flex-direction: column;
        text-align: center;
        & > div > span {
          justify-content: center;
        }
      }
    }
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
    height: 25rem;
    text-align: center;
  }
`;

export const BlogPreviewContentContainer = styled.div`
  flex: 7;

  & > span,
  & > span > span {
    display: flex;
    justify-content: flex-start;
    gap: 0.35rem;
    font-size: 0.875rem;
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
    align-items: top;

    margin-bottom: 0.5rem;

    &:nth-child(2) {
      border-bottom: 1px dashed #cccccce0;
    }

    & > p {
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    & > span:first-of-type {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.5rem;
      justify-content: center;
      justify-items: center;
      align-items: start;
      text-align: center;
      padding-bottom: 0.5rem;

      > span:first-of-type,
      > span:last-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.35rem;

        > p {
          margin: 0;
        }
      }

      > span:nth-of-type(2) {
        display: none;
      }

      > &:last-of-type {
        grid-column: 1 / -1;
      }
    }
  }
`;

export const BlogPreviewImage = styled.div`
  flex: 3;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 0.25rem;
  min-width: 30%;

  @media screen and (max-width: 768px) {
    min-height: 10rem;
    width: 100%;
  }
`;

export const BlogPreviewTitle = styled.h3`
  font-size: 2.45rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  margin: 0.25rem 0;

  @media screen and (max-width: 768px) {
    font-size: 1.875rem;
  }
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

  @media screen and (max-width: 768px) {
    & > * {
      font-size: 0.75rem;
      line-height: 0.875rem;
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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
