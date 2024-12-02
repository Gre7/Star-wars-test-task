import { Text } from '@chakra-ui/react';

import { pixelsToRem } from '@/helpers/pixelsToRem';

export type CharacteristicTextProps = {
  title: string;
  value: string;
};

const CharacteristicText = ({ title, value }: CharacteristicTextProps) => {
  if (value === 'n/a' || value === 'unknown') return;

  return (
    <Text fontSize={pixelsToRem(16)} fontWeight={400} lineHeight={'18.7px'}>
      {title}: {value};
    </Text>
  );
};
export default CharacteristicText;
