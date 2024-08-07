import styled from 'styled-components';

export const YoutubeTrailerContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: .5rem;

  & > article {
    width: 74%;
    height: 100%;
    border: none;
    border-radius: 0.75rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 768px) {
    height: 16rem;

    & > article {
      width: 100%;
      height: 16rem;
      border-radius: 0;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1366px) {
    height: 36rem;

    & > article {
      width: 100%;
      height: 36rem;
      border-radius: 0;
    }
  }
`;
