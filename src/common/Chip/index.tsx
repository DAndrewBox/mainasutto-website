import { chipTypes } from './Chip.helpers';
import { ChipIcon, ChipText, ChipTextIcon, ChipWrapper } from './Chip.styles';

interface ChipProps {
  type: keyof typeof chipTypes;
}

export const Chip = ({ type }: ChipProps) => {
  const chipTypeIsImage = chipTypes[type].icon.includes('.');

  return (
    <ChipWrapper color={chipTypes[type].color}>
      {chipTypeIsImage && chipTypes[type].icon && <ChipIcon src={chipTypes[type].icon} />}
      {!chipTypeIsImage && <ChipTextIcon>{chipTypes[type].icon}</ChipTextIcon>}
      <ChipText color={chipTypes[type].textColor}>{chipTypes[type].text}</ChipText>
    </ChipWrapper>
  );
};

export default Chip;
