import { ChipIcon, ChipText, ChipWrapper } from './Chip.styles';
import LoaderImage from '@assets/images/loader.webp';

export const Chip = ({ type }) => {
  const chipTypes = {
    TIG: {
      text: 'TIGSource Archive',
      color: '#4c98cc',
      textColor: '#fff',
      icon: 'https://upload.wikimedia.org/wikipedia/en/a/a1/TIGSource_logo.png',
    },
    ANNOUNCEMENT: {
      text: 'Announcement',
      color: '#45C3B8',
      textColor: '#fff',
      icon: LoaderImage,
    },
    RELEASE: {
      text: 'Release',
      color: '#F8A555',
      textColor: '#05051e',
      icon: 'https://i.imgur.com/LdE0PE5.png',
    },
    VIDEO: {
      text: 'Video',
      color: '#800050',
      textColor: '#fff',
      icon: 'https://www.pngall.com/wp-content/uploads/13/Logo-Youtube-PNG-Images.png',
    },
  };

  return (
    <ChipWrapper color={chipTypes[type].color}>
      {chipTypes[type].icon && <ChipIcon src={chipTypes[type].icon} />}
      <ChipText color={chipTypes[type].textColor}>{chipTypes[type].text}</ChipText>
    </ChipWrapper>
  );
};
