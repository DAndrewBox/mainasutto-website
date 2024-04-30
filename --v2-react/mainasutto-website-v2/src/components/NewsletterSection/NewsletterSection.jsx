import { Section } from '../../common';
import { useTranslation } from '../../utils/traslations';
import { MailchimpForm } from './MailchimpForm';
import backgroundImage from '../../assets/images/newsletter_background.webp';

export const NewsletterSection = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('newsletter_title')} subtitle={t('newsletter_subtitle')} backgroundImage={backgroundImage}>
      <MailchimpForm />
    </Section>
  );
};
