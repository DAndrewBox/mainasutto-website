import React from 'react';
import MaichimpHeaderImage from '../../../assets/images/newsletter_header.png';
import {
  MailchimpButtonContainer,
  MailchimpFormConsent,
  MailchimpFormContainer,
  MailchimpFormHeader,
  MailchimpInputContainer,
} from './MailchimpForm.styles';
import { useTranslation } from '../../../utils/traslations';

export const MailchimpForm = () => {
  const { t } = useTranslation();
  
  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      'https://mainasutto.us19.list-manage.com/subscribe/post?u=e8e1c2520918363f497159ed6&amp;id=cce15c7d64&amp;f_id=0070a7e4f0';
    const email = e.target.EMAIL.value;
    const nickname = e.target.NICKNAME.value ?? email.split('@')[0];
    const isBot = e.target['mce-ANTIBOT-LAYER'].value !== '0000';

    if (isBot) {
      return;
    }

    fetch(`${url}&EMAIL=${email}&NICKNAME=${nickname}`, { mode: 'no-cors', method: 'POST' })
      .then(() => {
        alert('You have been subscribed!');
      })
      .catch(() => {
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <>
    <MailchimpFormContainer onSubmit={onSubmit}>
      <MailchimpFormHeader src={MaichimpHeaderImage} alt="Mailchimp" />
      <MailchimpInputContainer>
        <div>
          <label>
            Email <span>*</span> <span>(required)</span>
          </label>
          <input type="email" name="EMAIL" id="mce-EMAIL" required />
        </div>
        <div>
          <label>Nickname</label>
          <input type="text" name="NICKNAME" id="mce-NICKNAME" />
        </div>
        <div>
          <input type="hidden" name="mce-ANTIBOT-LAYER" tabIndex="-1" value="0000" />
        </div>
      </MailchimpInputContainer>

      <MailchimpButtonContainer>
        <button type="submit">{t('newsletter_subscribe')}</button>
      </MailchimpButtonContainer>
    </MailchimpFormContainer>
    <MailchimpFormConsent>
      {t('newsletter_consent')}
    </MailchimpFormConsent>
    </>
  );
};
