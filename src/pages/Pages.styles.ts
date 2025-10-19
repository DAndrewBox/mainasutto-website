import DefaultBackground from '@assets/images/bg_tex.webp';
import styled from 'styled-components';

export const CommonPage = styled.div`
  background-image: url('${DefaultBackground}');
  min-width: 100vw;
  min-height: 100vh;
`;

export const NoBackgroundPage = styled.div`
  background-color: var(--color-bg-primary);
  background-image: none !important;
  min-width: 100vw;
  min-height: 100vh;
`;
