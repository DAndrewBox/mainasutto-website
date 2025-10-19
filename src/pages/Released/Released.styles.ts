import styled from 'styled-components';

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
