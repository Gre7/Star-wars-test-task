import { Box, Stack, Text } from '@chakra-ui/react';

import { pixelsToRem } from '@/helpers/pixelsToRem';
import { roundToTwoDecimals } from '@/helpers/roundToTwoDecimals';

type RoundAnthropometryValue = {
  title: string;
  value: string;
};

const RoundAnthropometryValue = ({ title, value }: RoundAnthropometryValue) => {
  const roundedValue = roundToTwoDecimals(value);

  if (!roundedValue) return;

  return (
    <Stack direction={'column'} gap={'5px'} align={'center'}>
      <Box
        width={'37px'}
        height={'36px'}
        borderRadius={'50%'}
        border={'3px solid #212121'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text
          fontSize={pixelsToRem(15)}
          color={'#212121'}
          lineHeight={'17.54px'}
        >
          {roundedValue}
        </Text>
      </Box>
      <Text fontSize={pixelsToRem(12)} color={'#4B4B4B'} lineHeight={'14.03px'}>
        {title}
      </Text>
    </Stack>
  );
};

export default RoundAnthropometryValue;
