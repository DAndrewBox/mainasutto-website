import $backgroundImage from '@assets/images/newsletter_background_v2.webp';
import MailchimpForm from '@src/common/MailchimpForm';
import Section from '@src/common/Section';
import { useTranslation } from '@utils/i18n';
import { NewsletterConsent } from './NewsletterSection.styles';

export const NewsletterSection = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('newsletter_title')} subtitle={t('newsletter_subtitle')} $backgroundImage={$backgroundImage}>
      <MailchimpForm />
      <NewsletterConsent>{t('newsletter_consent')}</NewsletterConsent>
    </Section>
  );
};

export default NewsletterSection;
