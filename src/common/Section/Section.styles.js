import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: -0.5rem auto;
  padding-bottom: 1rem;

  background: ${({ $isOverlay }) => ($isOverlay ? 'var(--color-bg-secondary)' : 'transparent')};
  background-image: ${({ $backgroundImage }) => ($backgroundImage ? `url(${$backgroundImage})` : 'none')};
  background-size: cover;
  background-position-y: center;
  background-attachment: fixed;

  filter: drop-shadow(0px 0px 1rem rgba(0, 0, 0, 0.3));

  ${({ $isOverlay }) =>
    $isOverlay
      ? `    
      z-index: 10;
      position: relative;
      box-shadow: 0 0 1rem rgba(5, 5, 30, .30);
      filter: none;

    & > h2 {
      color: var(--color-highlight-secondary);
      font-weight: 700;
      letter-spacing: 0.25rem;
      font-size: 3.5rem;
      text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
      & > h2 {
        font-size: 2rem;
        letter-spacing: 0.1rem;
      }
    }
  `
      : ''};

  @media screen and (max-width: 768px) {
    & > h2 {
      margin-bottom: 1rem;
      width: 95%;
    }
  }
`;

export const SectionTitle = styled.h2`
  letter-spacing: 0.15rem;
  font-size: 3rem;
  font-weight: 300;
  font-family: Montserrat, sans-serif;
  margin-bottom: 2.25rem;
  color: var(--color-text-primary);
  text-align: center;
  text-shadow: 0px 1px 3px rgb(7, 7, 14);

  strong {
    font-weight: 600;
    letter-spacing: 0.225rem;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    letter-spacing: 0.1rem;
    font-size: 1.75rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--color-text-secondary);
  text-align: center;
  margin-top: -1.5rem;
  margin-bottom: 2.25rem;

  @media screen and (max-width: 768px) {
    width: 95%;
    font-size: 0.75rem;
    margin-top: -.75rem;
  }
`;
