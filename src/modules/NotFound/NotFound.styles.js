import styled from 'styled-components';
import WB from '@assets/images/wb_question.webp';

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('${WB}');
  background-position: right bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: auto;

  @media (max-width: 768px) {
    margin-top: 12rem;
  }
`;

export const NotFoundTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  color: #dc3545;

  @media (max-width: 768px) {
    font-size: 5.5rem;
  }
`;

export const NotFoundDivider = styled.hr`
  width: 200%;
  height: 1px;
  margin: 1rem 0;
  background-color: var(--color-text-secondary);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NotFoundText = styled.p`
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  color: var(--color-text-primary);

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const NotFoundSubtext = styled.p`
  position: fixed;
  bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  color: var(--color-text-secondary);

  @media (max-width: 768px) {
    top: 2rem;
  }
`;