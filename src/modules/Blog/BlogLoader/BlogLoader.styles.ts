import styled from 'styled-components';

export const BlogLoaderWrapper = styled.div<{ $isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;

  ${({ $isLoading }) => ($isLoading ? 'animation: wrapper-loading .66s ease-in-out infinite alternate;' : '')};
  transition: all 0.33s ease-in;

  @keyframes wrapper-loading {
    from {
      background-color: #05051e88;
    }
    to {
      background-color: #05051ecc;
    }
  }
`;

export const BlogLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const BlogLoaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BlogLoaderImage = styled.img`
  width: 6rem;
  height: 6rem;
  animation: appear 1s ease-in infinite alternate;

  @keyframes appear {
    from {
      opacity: 0.33;
    }
    to {
      opacity: 0.66;
    }
  }
`;

export const BlogLoaderText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-text-primary);
  text-shadow: 0 0 2px var(--color-bg-primary);
  letter-spacing: 1px;

  & > span {
    margin-left: 0.16rem;
    animation: appear 0.66s linear infinite alternate;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 0.33s;
    }

    &:nth-child(3) {
      animation-delay: 0.66s;
    }
  }
`;

export const BlogLoaderUrl = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0;
  color: var(--color-highlight-primary);
  transition: all 0.25s ease-in;

  &:hover {
    color: var(--color-highlight-secondary);
    letter-spacing: .5px;
  }
`;
