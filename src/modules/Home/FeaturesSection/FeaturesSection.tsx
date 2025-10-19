import Section from '@common/Section';
import { useTranslation } from '@utils/i18n';
import Feature from './Feature/Feature';
import { FeatureSeparator } from './Feature/Feature.styles';
import { features } from './FeaturesSection.helpers';

export const FeaturesSection = () => {
  const { t, Trans } = useTranslation();

  return (
    <Section title={<Trans i18nKey={'header_title'} components={{ bold: <strong /> }} />}>
      {features.map((feature, index) => (
        <div key={`feature-${feature.title}`}>
          <Feature src={feature.src} title={t(feature.title)} description={<Trans i18nKey={feature.description} />} inverted={index % 2 !== 0} />
          {index < features.length - 1 && <FeatureSeparator />}
        </div>
      ))}
      <span style={{ marginBottom: '2rem' }} />
    </Section>
  );
};

export default FeaturesSection;
