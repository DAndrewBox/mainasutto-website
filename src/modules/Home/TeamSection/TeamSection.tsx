import Section from '@common/Section';
import { useTranslation } from '@utils/i18n';
import { Trans } from 'react-i18next';
import { specialThanks, team } from './TeamSection.helpers';
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

export const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('team_title')} $isOverlay>
      <TeamIntroduction>
        <Trans i18nKey="team_intro" components={{ bold: <strong />, br: <br /> }} />
      </TeamIntroduction>
      <TeamContainer>
        {team.map((member) => (
          <TeamMember key={`team-member-${member.nickname}`}>
            <TeamMemberImage src={member.image} alt={member.name} loading="lazy" />
            <TeamMemberName>{member.name}</TeamMemberName>
            <TeamMemberRole>{t(member.role)}</TeamMemberRole>
            <TeamMemberNickname>"{member.nickname}"</TeamMemberNickname>
            <TeamMemberDescription>{t(member.description)}</TeamMemberDescription>
          </TeamMember>
        ))}
      </TeamContainer>

      <TeamThanksContainer>
        <TeamThanksTitle>{t('team_thanks_title')}</TeamThanksTitle>
        <TeamThanksSubtitle>{t('team_thanks_subtitle')}</TeamThanksSubtitle>
        <TeamThanksMemberContainer>
          {specialThanks.map((thanks) => (
            <TeamThanksMember key={`special-thanks-${thanks.username}`}>
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

export default TeamSection;
