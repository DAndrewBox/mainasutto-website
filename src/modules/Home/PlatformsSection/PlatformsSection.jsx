import { Section } from '@common';
import { Platform, PlatformsContainer } from './PlatformSection.styles';
import { useTranslation } from '@utils/i18n';
import { useNavigate } from 'react-router-dom';
import { platforms } from './utils';

export const PlatformsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handlePlatformClick = (platform) => {
    if (platform.href) {
      window.location.href = platform.href;
    }
  };

  return (
    <Section>
      <PlatformsContainer>
        {platforms.map((platform, index) => (
          <Platform
            key={`platform-${index}`}
            onClick={() => handlePlatformClick(platform)}
            $active={platform.href !== ''}
          >
            <img src={platform.icon} alt={platform.name} />
            <span>{t(platform.status)}</span>
          </Platform>
        ))}
      </PlatformsContainer>
    </Section>
  );
};
