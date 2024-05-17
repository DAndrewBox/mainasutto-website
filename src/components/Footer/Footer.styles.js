import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-bg-primary);
  padding: 1.5rem 0;
  margin-top: 2rem;
  width: 100%;

  letter-spacing: 0.05rem;
  font-size: .875rem;
  color: var(--color-text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;

  span:last-of-type {
    margin-top: .25rem;
    color: var(--color-text-secondary);
    opacity: .66;
  }
`;

export const FooterIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  margin-bottom: .875rem;
`;
