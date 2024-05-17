import { Trans } from 'react-i18next';
import { Section } from '../../common';
import { useTranslation } from '../../utils/traslations';
import { Feature } from './Feature/';
import { FeatureSeparator } from './Feature/Feature.styles';
import { features } from './utils';

export const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <Section title={<Trans i18nKey={'header_title'} components={{ bold: <strong /> }} />}>
      {features.map((feature, index) => (
        <>
          <Feature
            key={`feature-${index}`}
            src={feature.src}
            title={t(feature.title)}
            description={<Trans i18nKey={feature.description} components={{ bold: <strong /> }} />}
            inverted={index % 2 !== 0}
          />
          {index < features.length - 1 && <FeatureSeparator />}
        </>
      ))}
      <span style={{ marginBottom: '2rem' }} />
    </Section>
  );
};
