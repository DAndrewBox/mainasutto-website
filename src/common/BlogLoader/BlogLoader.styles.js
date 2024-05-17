import styled from 'styled-components';

export const BlogLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  animation: ${({ startActive }) => (startActive ? 'wrapper-disappear .66s' : 'wrapper-appear 0.66s')} ease-in;
  background-color: ${({ startActive }) => (startActive ? 'transparent' : '#05051eaa')};

  @keyframes wrapper-appear {
    from {
      background-color: transparent;
    }
    to {
      background-color: #05051eaa;
    }
  }

  @keyframes wrapper-disappear {
    from {
      background-color: #05051eaa;
    }
    to {
      background-color: transparent;
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
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-text-primary);
  text-shadow: 0 0 2px var(--color-bg-primary);

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
