import MaichimpHeaderImage from '@assets/images/newsletter_header_v2.webp';
import { useTranslation } from '@utils/i18n';
import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailchimpButtonContainer, MailchimpFormContainer, MailchimpFormHeader, MailchimpInputContainer } from './MailchimpForm.styles';

interface MailchimpFormProps {
  width?: string;
}

export const MailchimpForm = ({ width }: MailchimpFormProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const eventTarget = e.target as HTMLFormElement;
    const url = import.meta.env.VITE_MAILCHIMP_NEWSLETTER_URL ?? '';
    const email = eventTarget.EMAIL.value;
    const emailIsValid =
      email.includes('@') &&
      email.includes('.') &&
      !email.includes('+') &&
      email.split('@').length === 2 &&
      email.split('@')[0].length > 3 &&
      email.split('@')[1].split('.')[0].length > 2 &&
      email.split('@')[1].split('.')[1].length > 1 &&
      email.split('@')[1].split('.')[1].length < 4;

    if (!emailIsValid) {
      alert('Please enter a valid email address.');
      return;
    }

    const nickname = eventTarget.NICKNAME.value ?? email.split('@')[0];
    const isBot = eventTarget['mce-ANTIBOT-LAYER'].value !== '0000';

    if (isBot) {
      navigate('/');
      return;
    }

    await fetch(`${url}&EMAIL=${email}&NICKNAME=${nickname}`, { mode: 'no-cors', method: 'POST' })
      .then(() => {
        setIsSubscribed(true);
        alert('You have been subscribed!');
      })
      .catch(() => {
        alert('An error occurred. Please try again later.');
      });
  };

  const labelSubscribe = isSubscribed ? t('newsletter_success') : t('newsletter_subscribe');

  return (
    <MailchimpFormContainer onSubmit={onSubmit} $width={width}>
      <MailchimpFormHeader src={MaichimpHeaderImage} alt="Mailchimp" />
      <MailchimpInputContainer>
        <div>
          <label htmlFor="mce-EMAIL">
            Email <span>*</span> <span>(required)</span>
          </label>
          <input type="email" name="EMAIL" id="mce-EMAIL" required disabled={isSubscribed} />
        </div>

        <div>
          <label htmlFor="mce-NICKNAME">Nickname</label>
          <input type="text" name="NICKNAME" id="mce-NICKNAME" disabled={isSubscribed} />
        </div>

        <div style={{ display: 'none' }}>
          <label htmlFor="mce-ANTIBOT-LAYER">Phone number</label>
          <input type="text" name="mce-ANTIBOT-LAYER" tabIndex={-1} value="0000" />
        </div>
      </MailchimpInputContainer>

      <MailchimpButtonContainer>
        <button type="submit" disabled={isSubscribed}>
          {labelSubscribe}
        </button>
      </MailchimpButtonContainer>
    </MailchimpFormContainer>
  );
};

export default MailchimpForm;
