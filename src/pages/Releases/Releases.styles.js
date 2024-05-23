import styled from 'styled-components';
import AlphaBackground from '@assets/images/bg_alpha.webp';
import BetaBackground from '@assets/images/bg_beta.webp';

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
