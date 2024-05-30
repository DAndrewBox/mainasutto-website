import styled from 'styled-components';

export const ChipWrapper = styled.div`
  display: flex;
  padding: 0rem .75rem;
  margin-left: 0.125rem;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-height: 1.25rem;
  background-color: ${(props) => props.color};
`;

export const ChipText = styled.span`
  font-size: 0.75rem;
  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.color};
  text-align: center;
  transform: translateY(-0.05rem);
`;

export const ChipTextIcon = styled.span`
  font-size: 0.75rem;
  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.color};
  text-align: center;
  transform: translateY(-0.05rem);
  margin-right: 0.5rem;
`;

export const ChipIcon = styled.img`
  width: .875rem;
  height: .875rem;
  margin-right: 0.5rem;
  transform: translateY(-0.05rem);
`;
