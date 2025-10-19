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

export const BlogPostsNavigationContainer = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: ${({ width }) => (width ? width : '90%')};
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

export const NewsletterContainer = styled.div<{ $backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: -2rem;
  margin-right: -2rem;
  padding: 1.25rem;

  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position-y: center;
  background-attachment: fixed;

  filter: drop-shadow(0px 0px .25rem rgba(0, 0, 0, 0.3));
`;

export const NewsletterTitle = styled.h4`
  font-size: 1.675rem;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  color: var(--color-text-primary);
  margin-top: 0;
  margin-bottom: 1.50rem;
  text-align: center;
`;
