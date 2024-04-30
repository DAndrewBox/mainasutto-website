import { Trans } from 'react-i18next';
import { Section } from '../../common';
import { useTranslation } from '../../utils/traslations';
import { Feature } from './Feature/';
import { FeatureSeparator } from './Feature/Feature.styles';

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      src: 'https://placehold.it/1920x1080',
      title: t('features_feat_NonLineal_title'),
      description: 'features_feat_NonLineal_desc',
    },
    {
      src: 'https://placehold.it/1920x1080',
      title: t('features_feat_SelfPaced_title'),
      description: 'features_feat_SelfPaced_desc',
    },
    {
      src: 'https://placehold.it/1920x1080',
      title: t('features_feat_Completionist_title'),
      description: 'features_feat_Completionist_desc',
    },
    {
      src: 'https://placehold.it/1920x1080',
      title: t('features_feat_Customize_title'),
      description: 'features_feat_Customize_desc',
    },
    {
      src: 'https://placehold.it/1920x1080',
      title: t('features_feat_ChooseYourSide_title'),
      description: 'features_feat_ChooseYourSide_desc',
    },
  ];

  return (
    <Section title={<Trans i18nKey={'header_title'} components={{ bold: <strong /> }} />}>
      {features.map((feature, index) => (
        <>
          <Feature
            key={`feature-${index}`}
            src={feature.src}
            title={feature.title}
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
