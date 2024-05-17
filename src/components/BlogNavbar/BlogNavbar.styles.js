import styled from 'styled-components';

export const BlogNavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #a62d67;
  color: var(--color-text-primary);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  height: 2rem;
  z-index: 100;
`;

export const BlogNavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  width: 70%;
  align-content: center;
  justify-items: end;
  margin: 0 auto;

  & > a:first-child {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    color: var(--color-text-primary);
    letter-spacing: 1px;
    text-decoration: none;
    transition: text-shadow 0.16s;

    &:hover {
      text-shadow: 0 0 .25rem #ffffff99;
    }
  }
`;

export const BlogNavbarItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

export const BlogNavbarItem = styled.a`
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.16s;
  padding: 0.25rem 1rem;
  transition: all 0.16s ease-in-out;

  ${(props) =>
    props.currentPage
      ? `
    border-bottom: 2px solid var(--color-text-secondary);
    color: var(--color-text-primary);
  `
      : 'transform: positionY(-1px);'}

  &:hover {
    color: var(--color-text-primary);
    background-color: #dddddd33;
  }

  &:active {
    background-color: #dddddd66;
  }
`;
