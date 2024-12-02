import { Box, Stack, Text } from '@chakra-ui/react';

import { robotoFont } from '@/app/fonts/fonts';
import { pixelsToRem } from '@/helpers/pixelsToRem';
import { startsWithNumber } from '@/helpers/validationCheck';
import { PersonGenders } from '@/state/api/people/peopleApi.types';
import { isGender } from '@/widgets/ChooseFavoriteBlock/ChooseFavoriteBlock.config';

import PersonCardBadge from './components/PersonCardBadge/PersonCardBadge';
import RoundAnthropometryValue from './components/RoundAnthropometryValue/RoundAnthropometryValue';

export type StarWarsPersonCardProps = {
  name: string;
  height: string;
  mass: string;
  gender?: PersonGenders;
  birthYear?: string;
  handleClick: () => void;
};

const StarWarsPersonCard = ({
  name,
  height,
  mass,
  gender,
  birthYear,
  handleClick,
}: StarWarsPersonCardProps) => {
  return (
    <Box
      background={'#F0F0F0'}
      borderRadius={'lg'}
      width={'100%'}
      maxWidth={'352px'}
      height={'136px'}
      padding={'5px 0 12px 25px'}
      cursor="pointer"
      onClick={handleClick}
    >
      <Text
        as={'h3'}
        fontSize={pixelsToRem(18)}
        fontWeight={700}
        color={'#212121'}
        lineHeight={'21.04px'}
      >
        {name}
      </Text>
      <Stack direction={'row'} gap={'12px'} marginTop={'12px'}>
        <RoundAnthropometryValue title="height" value={height} />

        <RoundAnthropometryValue title="mass" value={mass} />
      </Stack>
      <Stack
        direction={'row'}
        gap={'12px'}
        marginTop={'12px'}
        className={robotoFont.className}
      >
        {gender && isGender(gender) && (
          <PersonCardBadge text={gender} type={gender} />
        )}

        {birthYear && startsWithNumber(birthYear) && (
          <PersonCardBadge text={birthYear} type={'birthYear'} />
        )}
      </Stack>
    </Box>
  );
};

export default StarWarsPersonCard;
