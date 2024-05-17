import styled from 'styled-components';

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 2rem;
  background-color: #eee;

  width: 70vw;
  min-height: 80vh;
`;

export const BlogPostsNavigationContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: ${({ width }) => (width ? width : '80%')};
  margin-top: 1.25rem;
  padding-top: 0.5rem;
  border-top: 2px solid #ccc;
`;

export const BlogPostsNavigationButton = styled.a`
  color: var(--color-bg-primary);
  text-decoration: none;
  transition: color 0.16s;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 2px solid transparent;
  transition: all 0.16s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #05051e11;
    border-bottom: 2px solid var(--color-bg-secondary);
  }
`;
