import { FooterContainer, FooterIconsContainer } from './Footer.styles';
import { FooterIcon } from './FooterIcon';
import { Discord, Steam, Twitter, Youtube } from '../../common';
import { Trans } from 'react-i18next';
import { useTranslation } from '../../utils/traslations';

export const Footer = () => {
  const { t } = useTranslation();
  const footerIcons = [
    {
      Component: Steam,
      href: 'https://store.steampowered.com/app/2580170/',
      alt: 'Steam Page',
    },
    {
      Component: Discord,
      href: 'https://mainasutto.com/discord',
      alt: 'Discord',
    },
    {
      Component: Twitter,
      href: 'https://mainasutto.com/twitter',
      alt: 'Twitter / X',
    },
    {
      Component: Youtube,
      href: 'https://www.youtube.com/c/DAndrëwBox',
      alt: 'Youtube',
    },
  ];

  return (
    <FooterContainer>
      <FooterIconsContainer>
        {footerIcons.map((icon, index) => (
          <FooterIcon key={`footer-socials-${index}`} {...icon} />
        ))}
      </FooterIconsContainer>
      <span>
        <Trans i18nKey={'footer_line1'} components={{ bold: <strong /> }} />
      </span>
      <span>{t('footer_line2')}</span>
    </FooterContainer>
  );
};
