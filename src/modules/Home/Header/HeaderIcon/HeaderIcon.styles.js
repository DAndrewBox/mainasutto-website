import styled from 'styled-components';

export const HeaderIconLinkAnimation = styled.span`
  z-index: 3;
  opacity: 0;
  transition: all 0.2s ease-out;
  animation: fadeIn 1.16s ease-in-out forwards;
  animation-delay: ${(props) => .50 + props?.$animationDelay / 2.5}s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(.66rem);
    }
    to {
      opacity: 0.7;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(.66rem) scale(.75);
      }
      to {
        opacity: 0.7;
        transform: translateY(0) scale(.75);

      }
    }
  }
`;

export const HeaderIconLink = styled(HeaderIconLinkAnimation)`
  opacity: .7;
  transform: scale(1);
  animation: none;
  
  &:hover {
    opacity: .90;
    transform: scale(1.05);
    filter: drop-shadow(0rem 0rem 0.33rem rgba(255, 255, 255, 0.16));
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    transform: scale(.75);
  }
`;