import { Section } from '../../common';
import { useTranslation } from '../../utils/traslations';
import {
  TeamContainer,
  TeamIntroduction,
  TeamMember,
  TeamMemberDescription,
  TeamMemberImage,
  TeamMemberName,
  TeamMemberNickname,
  TeamMemberRole,
  TeamThanksContainer,
  TeamThanksMember,
  TeamThanksMemberContainer,
  TeamThanksMemberImage,
  TeamThanksMemberInfo,
  TeamThanksMemberName,
  TeamThanksMemberRole,
  TeamThanksMoreLink,
  TeamThanksSubtitle,
  TeamThanksTitle,
} from './TeamSection.styles';
import PicErik from '../../assets/images/team/team_erik.jpg';
import PicDrew from '../../assets/images/team/team_drew.png';
import { Trans } from 'react-i18next';
import { specialThanks } from './utils';

export const TeamSection = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: 'Francisco Castillo',
      nickname: 'Drëw',
      role: t('team_member_drew_role'),
      image: PicDrew,
      description: t('team_member_drew_desc'),
    },
    {
      name: 'Erik Strålberg',
      nickname: '456c',
      role: t('team_member_erik_role'),
      image: PicErik,
      description: t('team_member_erik_desc'),
    },
    {
      name: 'Felipe Maldonado',
      nickname: 'Maldo',
      role: t('team_member_maldo_role'),
      image: 'https://placehold.it/150x150',
      description: t('team_member_maldo_desc'),
    },
  ];

  return (
    <Section title={t('team_title')} isOverlay>
      <TeamIntroduction>
        <Trans i18nKey="team_intro" components={{ bold: <strong />, br: <br /> }} />
      </TeamIntroduction>
      <TeamContainer>
        {team.map((member, index) => (
          <TeamMember key={`team-member-${index}`}>
            <TeamMemberImage src={member.image} alt={member.name} loading="lazy" />
            <TeamMemberName>{member.name}</TeamMemberName>
            <TeamMemberRole>{member.role}</TeamMemberRole>
            <TeamMemberNickname>"{member.nickname}"</TeamMemberNickname>
            <TeamMemberDescription>{member.description}</TeamMemberDescription>
          </TeamMember>
        ))}
      </TeamContainer>

      <TeamThanksContainer>
        <TeamThanksTitle>{t('team_thanks_title')}</TeamThanksTitle>
        <TeamThanksSubtitle>{t('team_thanks_subtitle')}</TeamThanksSubtitle>
        <TeamThanksMemberContainer>
          {specialThanks.map((thanks, index) => (
            <TeamThanksMember key={`special-thanks-${index}`}>
              <TeamThanksMemberImage src={thanks.image} alt={thanks.name} loading="lazy" />
              <TeamThanksMemberInfo>
                <TeamThanksMemberName>
                  {thanks.name} {thanks.username && <span>{`(@${thanks.username})`}</span>}
                </TeamThanksMemberName>
                <TeamThanksMemberRole>{thanks.role}</TeamThanksMemberRole>
              </TeamThanksMemberInfo>
            </TeamThanksMember>
          ))}
          <TeamThanksMoreLink>
            {t('team_thanks_more')}
            {/*<br />
            <a href="#">{t('team_thanks_more_link')}</a>
            */}
          </TeamThanksMoreLink>
        </TeamThanksMemberContainer>
      </TeamThanksContainer>
    </Section>
  );
};
