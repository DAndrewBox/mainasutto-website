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

const specialThanks = [
  {
    name: 'Elisha Ramos',
    username: 'Pixelisha',
    role: 'Environment & Backgrounds Artist',
    image: 'https://pbs.twimg.com/profile_images/1542643819535290368/iyBux9gM_400x400.jpg',
  },
  {
    name: 'Ignacio Soto',
    username: 'Klonoz',
    role: 'Beta Enemy Sprites & Additional Art',
    image: 'https://pbs.twimg.com/profile_images/1728637655267602432/q8J_UUAS_400x400.jpg',
  },
  {
    name: 'Metaru',
    username: 'MetaruPX',
    role: 'Beta NPC Portraits Concepts',
    image:
      'https://pbs.twimg.com/profile_images/378800000127854660/0f5b7bec99fd78dfd0d9dea8169f0303_reasonably_small.gif',
  },
  {
    name: 'AngelWZ',
    username: 'Kory_w0',
    role: 'Alpha/Prototype Soundtrack',
    image: 'https://pbs.twimg.com/profile_images/978902136154218496/ePkH6CTi_400x400.jpg',
  },
  {
    name: 'Austral Frequencies',
    role: 'General SFXs Composer',
    image: 'https://i.imgur.com/Nb2ZucR.jpeg',
  },
  {
    name: 'Diego Lazo',
    username: 'UvaroKnight',
    role: 'English Translations & Storytelling Help',
    image: 'https://pbs.twimg.com/profile_images/1382191185956118528/DA-yY0wF_400x400.jpg',
  },
  {
    name: 'Vicente Plaza',
    username: 'DarkLordE',
    role: 'Storytelling Help',
    image: 'https://placehold.it/150x150',
  },
  {
    name: 'Catalina Videla',
    role: 'Storytelling Help',
    image: 'https://avatars.cloudflare.steamstatic.com/cba871f8f53d2214c6b1b420823f03cbf8b9e133_full.jpg',
  },
  {
    name: 'Rubén Calderón',
    username: 'Eriozu',
    role: 'Alpha/Prototype Tester',
    image:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/0e696ab6-a71e-40f1-bea0-ba6c2b330403-profile_image-70x70.png',
  },
  {
    name: 'Ignacio Saavedra',
    username: 'Saign',
    role: 'Alpha/Prototype & Beta Tester',
    image:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/4a572902-55dd-49db-a38c-133c3c720555-profile_image-70x70.png',
  },
  {
    name: 'Jin Franko',
    username: 'AshesOfJin',
    role: 'Main Beta Tester & Coordinator',
    image: 'https://f4.bcbits.com/img/0032663038_41.jpg',
  },
  {
    name: 'Xor',
    username: 'XorDev',
    role: 'Shaders & VFX Help',
    image: 'https://pbs.twimg.com/profile_images/1709578571264503808/QtnsQg5n_400x400.jpg',
  },
];

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
    <Section title="Meet the Team" isOverlay>
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
