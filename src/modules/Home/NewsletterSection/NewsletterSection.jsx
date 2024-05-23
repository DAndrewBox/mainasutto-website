import { Section, MailchimpForm } from '@common';
import { useTranslation } from '@utils/i18n';
import { NewsletterConsent } from './NewsletterSection.styles';
import $backgroundImage from '@assets/images/newsletter_background.webp';

export const NewsletterSection = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('newsletter_title')} subtitle={t('newsletter_subtitle')} $backgroundImage={$backgroundImage}>
      <MailchimpForm />
      <NewsletterConsent>{t('newsletter_consent')}</NewsletterConsent>
    </Section>
  );
};
