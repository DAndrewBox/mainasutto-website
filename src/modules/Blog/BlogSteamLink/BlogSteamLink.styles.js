import styled from 'styled-components';

export const BlogSteamLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.25rem 1rem;
  gap: 1rem;
  background: rgb(23, 26, 33);
  background: linear-gradient(90deg, rgba(23, 26, 33, 1) 0%, rgba(27, 40, 56, 1) 50%, rgba(23, 26, 33, 1) 100%);
`;

export const BlogSteamLinkUrl = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  color: #c7d5e0;
  transition: all 0.3s ease;

  &:hover {
    color: #66c0f4;
    letter-spacing: 1px;
    text-decoration: none;
  }
`;
