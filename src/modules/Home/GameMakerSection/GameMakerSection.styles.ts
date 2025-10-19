import styled from 'styled-components';

export const GameMakerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width:769px) and (max-width: 1024px) {
    width: 80%;
  }
`;

export const GameMakerText = styled.h3`
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: var(--color-text-primary);
  margin: 0;
`;

export const GameMakerImage = styled.img`
  width: 50%;
  height: auto;
  margin-top: -1.5rem;
  --webkit-user-select: none;
  user-select: none;
  pointer-events: none;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: -.75rem;
  }
`;
