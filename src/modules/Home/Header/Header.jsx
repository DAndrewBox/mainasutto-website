import {
  HeaderCTA,
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderNavItem,
  HeaderOverlay,
  HeaderSocialsContainer,
  NavLangMenu,
  NavLangMenuItem,
} from './Header.styles';
import backgroundVideo from '@assets/videos/headervideo_v2_360p.webm';
import MainasuttoLogo from '@assets/images/logo_v2.webp';
import HeaderVideoPoster from '@assets/images/headervideo_v2.webp';
import { HeaderIcon } from './HeaderIcon';
import { Discord, Steam, Twitter, Youtube, CaretDown, CaretRight } from '@common/Icons';
import { useTranslation } from '@utils/i18n';
import { useState } from 'react';
import i18n from '../../../public/i18n';

export const Header = () => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  /* const [yOffset, setYOffset] = useState(0);
  // Parallax effect for header video
  // -- This effect is disabled for now because it's causing performance issues
  window.onscroll = () => {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    setYOffset((currentScroll / (documentHeight - windowHeight)) * 25);
  };
  */

  const { t } = useTranslation();
  const labelPlayDemo = t('header_cta_playDemo');

  const socials = [
    {
      iconSrc: Steam,
      url: 'https://store.steampowered.com/app/2580170/',
      alt: 'Steam Wishlist',
    },
    {
      iconSrc: Discord,
      url: 'https://mainasutto.com/discord',
      alt: 'Discord',
    },
    {
      iconSrc: Twitter,
      url: 'https://twitter.com/mainasutto',
      alt: 'Twitter',
    },
    {
      iconSrc: Youtube,
      url: 'https://www.youtube.com/c/DAndrëwBox',
      alt: 'Youtube',
    },
  ];

  const navItems = [
    {
      label: t('header_nav_itemBlog'),
      url: '/blog',
    },
    {
      label: t('header_nav_itemTeam'),
      url: '#team',
      onClick: () => {
        // Scroll to Team Section without using IDs
        const teamSection = document.getElementsByTagName('section')[4];
        window.scrollTo({
          top: teamSection.offsetTop,
          behavior: 'smooth',
        });
      },
    },
    {
      label: t('header_nav_itemPresskit'),
      url: 'https://www.indiedb.com/games/mainasutto-im-not-alone/presskit',
    },
  ];

  const langMenuItems = [
    {
      label: t('header_nav_langEn'),
      onClick: () => {
        i18n.changeLanguage('en');
        setLangMenuOpen(false);
      },
      isActive: i18n.language === 'en',
    },
    {
      label: t('header_nav_langEs'),
      onClick: () => {
        i18n.changeLanguage('es');
        setLangMenuOpen(false);
      },
      isActive: i18n.language === 'es',
    },
    {
      label: t('header_nav_langJp'),
      onClick: () => {
        i18n.changeLanguage('jp');
        setLangMenuOpen(false);
      },
      isActive: i18n.language === 'jp',
    },
  ];

  return (
    <HeaderContainer>
      <img className="videoPoster" src={HeaderVideoPoster} alt="" />(
      <video autoPlay loop playsInline muted>
        <source src={backgroundVideo} type="video/webm" />
      </video>
      )
      <HeaderOverlay />
      <HeaderContent>
        <img src={MainasuttoLogo} alt="Mainasutto Logo" />
        <HeaderSocialsContainer>
          {socials.map((social, index) => (
            <HeaderIcon
              key={index}
              Component={social.iconSrc}
              href={social.url}
              alt={social.alt}
              delay={1.16 + index}
            />
          ))}
        </HeaderSocialsContainer>
        <HeaderCTA href="https://dandrewbox.itch.io/mainasutto-ina" alt={labelPlayDemo} target="_blank">
          {`[ ${labelPlayDemo} ]`}
        </HeaderCTA>
      </HeaderContent>
      <HeaderNavBar className={langMenuOpen ? 'active' : ''}>
        {navItems.map((item, index) => (
          <HeaderNavItem key={`nav-item-${index}`} href={item.url} onClick={item?.onClick || (() => {})}>
            {item.label}
          </HeaderNavItem>
        ))}
        <HeaderNavItem onClick={() => setLangMenuOpen(!langMenuOpen)}>
          <span>{t('header_nav_itemLanguage')}</span>
          {!langMenuOpen && <CaretRight color={'#FFFFFF'} size={'1.25rem'} />}
          {langMenuOpen && <CaretDown color={'#FFFFFF'} size={'1.25rem'} />}
        </HeaderNavItem>
      </HeaderNavBar>
      {langMenuOpen && (
        <NavLangMenu>
          {langMenuItems.map((item, index) => (
            <NavLangMenuItem key={`lang-${index}`} onClick={item.onClick} className={item.isActive ? 'active' : ''}>
              {item.label}
            </NavLangMenuItem>
          ))}
        </NavLangMenu>
      )}
    </HeaderContainer>
  );
};
