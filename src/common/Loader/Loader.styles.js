import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  position: fixed;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LoaderSquare = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: var(--color-bg-primary);
  animation: 0.66s ease-in-out ${({ delay }) => .20 + delay * 0.16}s slide;
  animation-fill-mode: forwards;

  @keyframes slide {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0) rotate(180deg);
      opacity: 0;
      filter: blur(1rem);
    }
  }
`;
