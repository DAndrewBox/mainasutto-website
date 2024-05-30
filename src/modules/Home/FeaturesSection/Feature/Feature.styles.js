import styled from 'styled-components';

export const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: 45fr 55fr;
  grid-gap: 1.5rem;
  margin: 2rem auto;
  align-items: center;
  width: 68.75%;
  opacity: 0;
  transform: translateX(-3rem);
  transition: all ease-in-out 0.3s;

  &:hover {
    background-color: rgb(255, 255, 255, 0.08);
    border-radius: 0.5rem;

    > img {
      transform: scale(1.025);
      filter: grayscale(0%);
    }
  }

  &.inverted, &:nth-of-type(2n) {
    transform: translateX(3rem);
  }

  &.appear {
    opacity: 1;
    transform: translateX(0);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr !important;
    width: 95%;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr !important;
    margin: auto;
    margin-top: 1rem;
  }
`;

export const FeatureImage = styled.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  width: 100%;
  height: auto;
  transition: all ease-in-out 0.16s;
  filter: grayscale(66%);
`;

export const FeatureTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: var(--color-highlight-secondary);
  letter-spacing: 0.125rem;
  font-size: 2.5rem;
  margin: 0;

  &.inverted {
    text-align: right;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center !important;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
    text-align: center !important;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 1.5rem;
  line-height: 2.125rem;
  font-family: 'Open Sans', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 300;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;

  &.inverted {
    text-align: right;
  }

  strong {
    font-weight: 600;
    color: var(--color-highlight-secondary);
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.125rem;
    text-align: center !important;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
    text-align: center !important;
  }
`;

export const FeatureSeparator = styled.hr`
  width: 68.75%;
  margin: 1rem auto;
  min-height: 2px;
  color: var(--color-text-primary);
  opacity: 0.33;
  border: none;
  border-bottom: 1px solid var(--color-text-primary);
`;
