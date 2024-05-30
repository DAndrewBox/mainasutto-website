import { ChipIcon, ChipText, ChipTextIcon, ChipWrapper } from './Chip.styles';
import { chipTypes } from './Chip.utils';

export const Chip = ({ type }) => {
  const chipTypeIsImage = chipTypes[type].icon.includes('.');

  return (
    <ChipWrapper color={chipTypes[type].color}>
      {chipTypeIsImage && chipTypes[type].icon && <ChipIcon src={chipTypes[type].icon} />}
      {!chipTypeIsImage && <ChipTextIcon>{chipTypes[type].icon}</ChipTextIcon>}
      <ChipText color={chipTypes[type].textColor}>{chipTypes[type].text}</ChipText>
    </ChipWrapper>
  );
};
