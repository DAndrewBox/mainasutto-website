import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  margin: 0 0 -1rem 0;
`;

export const GalleryButton = styled.button`
  padding: 0.5rem 1rem;
  opacity: 0.33;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  font-size: 1.25rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: all ease-out 0.16s;
  height: 753px;

  &:hover {
    background: var(--color-bg-primary);
    opacity: 0.66;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 753px;
  aspect-ratio: 16/9;
  object-fit: cover;
  opacity: 0.55;
  transition: all ease-out 0.33s;
  filter: grayscale(80%) blur(0.1rem);

  &.inTransition {
    opacity: 0;
    filter: grayscale(80%) blur(0.1rem);
  }
`;

export const GalleryImageMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 753px;

  > img {
    opacity: 1;
    filter: none;
  }

  > button:first-of-type {
    transform: translateX(2.75rem);
  }

  > button:last-of-type {
    transform: translateX(-2.75rem);
  }
`;
