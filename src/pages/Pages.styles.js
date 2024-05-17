import styled from 'styled-components';
import AlphaBackground from '../assets/images/bg_alpha.webp';
import BetaBackground from '../assets/images/bg_beta.webp';

export const NoBackgroundPage = styled.div`
  background-color: var(--color-bg-primary);
  background-image: none !important;
  min-width: 100vw;
  min-height: 100vh;
`;

export const AlphaWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('${AlphaBackground}');

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.66;
  }
`;

export const BetaWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('${BetaBackground}');

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.66;
  }
`;

export const ReleasedContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
`;

export const ReleasedWrapper = styled.code`
  display: grid;
  line-height: 1.33;
  font-family: 'Consolas', 'BitstreamVeraSansMono', 'CourierNew', Courier, monospace;
  grid-template-columns: repeat(64, 1fr);
  font-size: 1.33rem;
  margin-top: 1.5rem;
`;

export const ReleasedChar = styled.span`
  color: ${({ color }) => color};
`;

export const ReleasedTitle = styled.h1`
  color: var(--color-text-primary);
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  letter-spacing: 2px;
`;
