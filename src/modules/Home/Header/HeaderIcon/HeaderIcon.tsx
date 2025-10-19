import { useEffect, useState } from 'react';
import { HeaderIconLink, HeaderIconLinkAnimation } from './HeaderIcon.styles';

const iconColors = {
  default: '#DDD',
  hover: '#FFF',
};

export const HeaderIcon = ({ Component, alt, href, delay }) => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [iconColor, setIconColor] = useState(iconColors.default);
  const iconComponent = <Component color={iconColor} size="3.5rem" />;

  const handleOnClick = () => {
    window.open(href, '_blank', 'noreferrer');
  };

  // Set the animation to finished after the delay
  useEffect(() => {
    setTimeout(
      () => {
        setAnimationFinished(true);
      },
      (delay * 1000) / 2.5 + 1560,
    );
  }, [delay]);

  if (animationFinished) {
    return (
      <HeaderIconLink
        onClick={handleOnClick}
        $animationDelay={delay}
        aria-label={alt}
        onMouseEnter={() => setIconColor(iconColors.hover)}
        onMouseLeave={() => setIconColor(iconColors.default)}
      >
        {iconComponent}
      </HeaderIconLink>
    );
  }

  return (
    <HeaderIconLinkAnimation $animationDelay={delay} aria-label={alt}>
      {iconComponent}
    </HeaderIconLinkAnimation>
  );
};

export default HeaderIcon;
