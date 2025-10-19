import { Discord, Steam, Twitter, Youtube } from '@src/Icons';
import { useTranslation } from '@utils/i18n';
import { Trans } from 'react-i18next';
import { FooterContainer, FooterIconsContainer } from './Footer.styles';
import FooterIcon from './FooterIcon';

const footerIcons = [
  {
    id: 'steam',
    Component: Steam,
    href: 'https://store.steampowered.com/app/2580170/',
    alt: 'Steam Page',
  },
  {
    id: 'discord',
    Component: Discord,
    href: 'https://mainasutto.com/discord',
    alt: 'Discord',
  },
  {
    id: 'twitter',
    Component: Twitter,
    href: 'https://mainasutto.com/twitter',
    alt: 'Twitter / X',
  },
  {
    id: 'youtube',
    Component: Youtube,
    href: 'https://www.youtube.com/c/DAndrëwBox',
    alt: 'Youtube',
  },
];

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterIconsContainer>
        {footerIcons.map((icon) => (
          <FooterIcon key={`footer-socials-${icon.id}`} {...icon} />
        ))}
      </FooterIconsContainer>
      <span>
        <Trans i18nKey={'footer_line1'} components={{ bold: <strong /> }} />
      </span>
      <span>{t('footer_line2')}</span>
    </FooterContainer>
  );
};

export default Footer;
