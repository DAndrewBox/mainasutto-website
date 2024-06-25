import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 90vh;
  position: relative;
  background-color: var(--color-bg-primary);
  overflow: hidden;
  z-index: 0;

  video,
  img.videoPoster {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-filter: blur(4px);
    filter: blur(4px);

    img.videoPoster {
      z-index: -1;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 42.25rem;
    height: 42.25rem;

    video {
      min-height: 42.25rem;
      height: 42.25rem;
    }
  }
`;

export const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  background: linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(7, 7, 30, 1) 16%, rgba(3, 3, 15, 0) 33%);
  opacity: 0.33;
  z-index: 1;
  backdrop-filter: hue-rotate(${(props) => props.hueRotate}deg);
`;

export const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  z-index: 2;

  > img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    position: relative;
    width: 75vw;
    height: auto;
    opacity: 0;
    animation: headerImage 1.66s ease-out 0.66s forwards;

    @keyframes headerImage {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
        filter: drop-shadow(0rem 0rem 1.66rem rgba(255, 255, 255, 0.25));
      }
    }

    @media screen and (max-width: 768px) {
      width: 130vw;
    }

    @media screen and (min-width: 769px) and (max-width: 1336px) {
      width: 100vw;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 42.25rem;
    height: 42.25rem;
  }
`;

export const HeaderSocialsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 0rem;
  width: 40vw;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
    width: 90vw;
    grid-gap: 0.25rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1336px) {
    width: 60vw;
    grid-gap: 0.5rem;
  }
`;

export const HeaderCTA = styled.a`
  font: 2.25rem 'Roboto', sans-serif;
  font-weight: 700;
  letter-spacing: 0.125rem;
  color: #ddd;
  text-decoration: none;
  z-index: 4;
  opacity: 0;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.16s ease-out;
  animation: headerCTA 0.33s ease-out 3.66s forwards;
  margin-bottom: 1rem;

  &:hover {
    color: #fff;
    text-shadow: 0rem 0.125rem 0.66rem rgba(255, 255, 255, 0.33);
  }

  @keyframes headerCTA {
    from {
      margin-top: 0rem;
      opacity: 0;
    }
    to {
      margin-top: 7rem;
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;

    @keyframes headerCTA {
      from {
        margin-top: 0rem;
        opacity: 0;
      }
      to {
        margin-top: 4rem;
        opacity: 1;
      }
    }
  }
`;

export const HeaderNavBar = styled.nav`
  position: absolute;
  top: 0;
  right: 0.25rem;
  width: 100%;
  height: 2rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  z-index: 4;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.75rem;
  margin-right: 0.5rem;
  justify-content: flex-end;
  opacity: 0.33;
  transition: all 0.16s ease-out;

  &:hover,
  &.active {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100vw;
    gap: 0.5rem;
    margin-right: 0;
    padding-top: 0.5rem;
    opacity: 0.66;

    &:hover,
    &.active {
      opacity: 0.8;
    }
  }
`;

export const HeaderNavItem = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.1rem;

  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-primary);
  text-decoration: none;
  cursor: pointer;
  opacity: 0.66;
  transition: all 0.16s ease-out;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
    opacity: 1;
    text-shadow: 0rem 0rem 0.66rem rgba(255, 255, 255, 0.66);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid rgba(255, 255, 255, 1);-
    }
  }
`;

export const NavLangMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  background-color: rgba(255, 255, 255, 0.16);
  padding: 0.1rem;
  border-radius: 0.25rem;
  z-index: 4;
  transition: all 0.16s ease-out;

  & > button:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  @media screen and (max-width: 768px) {
    top: 2.5rem;
    right: 3rem;
  }
`;

export const NavLangMenuItem = styled.button`
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.16s ease-out;
  padding: 0.33rem 0.75rem;
  border-radius: 0.25rem;
  width: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
    text-shadow: 0rem 0rem 0.66rem rgba(255, 255, 255, 0.66);
  }

  &.active {
    color: var(--color-text-primary);
    text-shadow: 0rem 0rem 0.66rem rgba(255, 255, 255, 0.66);
  }
`;
