import PicGameMaker from '../../assets/images/GM-logo.png';
import { Section } from '../../common';
import { useTranslation } from '../../utils/traslations';
import { GameMakerContainer, GameMakerImage, GameMakerText } from './GameMakerSection.styles';

export const GameMakerSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <GameMakerContainer>
        <GameMakerText>{t('GameMaker_proud')}</GameMakerText>
        <GameMakerImage src={PicGameMaker} alt="Game Maker Logo" />
      </GameMakerContainer>
    </Section>
  );
};
