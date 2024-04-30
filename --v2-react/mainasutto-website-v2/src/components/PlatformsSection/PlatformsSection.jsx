import { Section } from '../../common';
import Steam from '../../assets/images/platform-steam.png';
import NSwitch from '../../assets/images/platform-switch.png';
import PS from '../../assets/images/platform-ps.png';
import Xbox from '../../assets/images/platform-xbox.png';
import { Platform, PlatformsContainer } from './PlatformSection.styles';
import { useTranslation } from '../../utils/traslations';

export const PlatformsSection = () => {
  const { t } = useTranslation();

  const platforms = [
    {
      name: 'Steam',
      icon: Steam,
      status: t('platforms_status_wishlist'),
      href: 'https://store.steampowered.com/app/2580170/',
    },
    {
      name: 'NSwitch',
      icon: NSwitch,
      status: t('platforms_status_comingSoon'),
      href: '#',
    },
    {
      name: 'PS',
      icon: PS,
      status: t('platforms_status_comingSoon'),
      href: '#',
    },
    {
      name: 'Xbox',
      icon: Xbox,
      status: t('platforms_status_comingSoon'),
      href: '#',
    },
  ];

  return (
    <Section>
      <PlatformsContainer>
        {platforms.map((platform, index) => (
          <Platform key={`platform-${index}`} href={platform.href} target='_blank'>
            <img src={platform.icon} alt={platform.name} />
            <span>{platform.status}</span>
          </Platform>
        ))}
      </PlatformsContainer>
    </Section>
  );
};
