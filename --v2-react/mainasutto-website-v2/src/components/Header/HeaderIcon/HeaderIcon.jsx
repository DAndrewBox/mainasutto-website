import { useState } from 'react';
import { HeaderIconLink, HeaderIconLinkAnimation } from './HeaderIcon.styles';

export const HeaderIcon = ({ Component, alt, href, delay }) => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [iconColor, setIconColor] = useState('#DDD');
  const iconComponent = <Component color={iconColor} size="3.5rem" />;

  // Set the animation to finished after the delay
  setTimeout(() => {
    setAnimationFinished(true);
  }, (delay * 1000) / 2.5 + 1560);

  if (animationFinished) {
    return (
      <HeaderIconLink
        href={href}
        target="_blank"
        rel="noreferrer"
        animationDelay={delay}
        aria-label={alt}
        onMouseEnter={() => setIconColor('#FFF')}
        onMouseLeave={() => setIconColor('#DDD')}
      >
        {iconComponent}
      </HeaderIconLink>
    );
  }

  return (
    <HeaderIconLinkAnimation animationDelay={delay} animationFinished={animationFinished} aria-label={alt}>
      {iconComponent}
    </HeaderIconLinkAnimation>
  );
};
