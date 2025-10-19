import Section from '@common/Section';
import { useTranslation } from '@utils/i18n';
import { Platform, PlatformsContainer } from './PlatformSection.styles';
import { platforms } from './utils';

export const PlatformsSection = () => {
  const { t } = useTranslation();

  const handlePlatformClick = (platform) => {
    if (platform.href) {
      window.location.href = platform.href;
    }
  };

  return (
    <Section>
      <PlatformsContainer>
        {platforms.map((platform) => (
          <Platform key={`platform-${platform.name}`} onClick={() => handlePlatformClick(platform)} $active={platform.href !== ''}>
            <img src={platform.icon} alt={platform.name} />
            <span>{t(platform.status)}</span>
          </Platform>
        ))}
      </PlatformsContainer>
    </Section>
  );
};
