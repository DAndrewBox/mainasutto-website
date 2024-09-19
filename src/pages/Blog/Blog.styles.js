import styled from 'styled-components';

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 2rem;
  background-color: #eee;
  overflow-x: hidden;

  width: 70vw;
  min-height: 80vh;

  @media screen and (max-width: 1024px) {
    width: 95vw;
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100vw;
  }
`;

export const BlogPostsNavigationContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: ${({ width }) => (width ? width : '80%')};
  margin-top: 1.25rem;
  padding-top: 0.5rem;
  border-top: 2px solid #ccc;

  @media screen and (max-width: 768px) {
    width: 100%;

    > *:first-child {
      text-align: right;
    }

    > *:last-child {
      text-align: left;
    }
  }
`;

export const BlogPostsNavigationButton = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 0.5rem;

  color: var(--color-bg-primary);
  text-decoration: none;
  transition: color 0.16s;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 2px solid transparent;
  transition: all 0.16s ease-in-out;

  &:first-of-type {
    text-align: right;
  }

  &:last-of-type {
    text-align: left;
  }

  &:hover {
    cursor: pointer;
    background-color: #05051e11;
    border-bottom: 2px solid var(--color-bg-secondary);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-top: 1px solid #ccc;
`;

export const NewsletterTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  color: var(--color-bg-secondary);
  margin: 1rem 0;
  text-align: center;
`;