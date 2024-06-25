import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: -1rem;
  background-color: var(--color-bg-primary);
  overflow: hidden;
`;

export const GalleryImageMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 768px;
  margin-top: 1.5rem;

  &:first-child {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .images-wrap {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;

    & > div {
      display: inline-block;
      width: 1366px;
      height: 100%;
    }
  }

  .indicators {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.66rem;
    height: 1rem;
    margin-bottom: 1rem;
    margin-top: 0;
    padding: 0;

    & > li > button {
      width: 0.33rem;
      height: 0.33rem;
      opacity: 0.55;
      border-radius: 0.5rem;
      border: none;
      background-color: #ccc;
      transition: all 0.16s ease-out;

      &.active,
      &:hover {
        opacity: 0.85;
        background-color: #fff;
      }
    }
  }
`;

export const GalleryImage = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
  opacity: 0.55;
  transition: all ease-out 0.33s;
  filter: grayscale(80%) blur(0.1rem);
  margin: auto;
  transform: translateX(30%);

  &.active-image {
    opacity: 1;
    filter: none;
  }

  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 100%;
    transform: translateX(0);
  }
`;
