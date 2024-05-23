import { Trans } from 'react-i18next';
import { Section } from '@common';
import { useTranslation } from '@utils/i18n';
import { Feature } from './Feature';
import { FeatureSeparator } from './Feature/Feature.styles';
import { features } from './utils';

export const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <Section title={<Trans i18nKey={'header_title'} components={{ bold: <strong /> }} />}>
      {features.map((feature, index) => (
        <div key={`feature-${index}`}>
          <Feature
            src={feature.src}
            title={t(feature.title)}
            description={<Trans i18nKey={feature.description} components={{ bold: <strong /> }} />}
            inverted={index % 2 !== 0}
          />
          {index < features.length - 1 && <FeatureSeparator />}
        </div>
      ))}
      <span style={{ marginBottom: '2rem' }} />
    </Section>
  );
};
