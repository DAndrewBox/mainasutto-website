import styled from 'styled-components';

export const PlatformsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 80%;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 1024px) {
    max-width: 95%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .5rem;
  }
`;

export const Platform = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  background-color: transparent;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  text-decoration: none;

  img {
    margin-bottom: -1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    opacity: ${({ $active }) => (!$active ? '.45' : '1')};
    width: 90%;
  }

  span {
    font-size: 0.875rem;
    color: ${({ $active }) => (!$active ? '#ccc' : '#fff')};
    font-family: 'Montserrat', sans-serif;
    font-weight: ${({ $active }) => (!$active ? '400' : '600')};
    margin-bottom: 0.5rem;
  }

  &:hover {
    cursor: ${({ $active }) => (!$active ? 'default' : 'pointer')};
    background-color: rgba(255, 255, 255, 0.16);

    img {
      filter: drop-shadow(0px 0px 1.5rem rgba(255, 255, 255, 0.1));
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }

    span {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 1024px) {
    img {
      width: 80%;
    }

    span {
      font-size: 1rem;
    }
  }
`;
