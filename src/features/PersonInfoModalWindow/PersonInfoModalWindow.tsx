'use client';

import { Box, Image, Stack, Text } from '@chakra-ui/react';

import { robotoFont } from '@/app/fonts/fonts';
import { CloseIcon } from '@/assets/icons';
import PersonCardBadge from '@/entities/StarWarsPersonCard/components/PersonCardBadge/PersonCardBadge';
import RoundAnthropometryValue from '@/entities/StarWarsPersonCard/components/RoundAnthropometryValue/RoundAnthropometryValue';
import { pixelsToRem } from '@/helpers/pixelsToRem';
import { startsWithNumber } from '@/helpers/validationCheck';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
} from '@/shared/ui';
import { PersonServerModel } from '@/state/api/people/peopleApi.types';
import { isGender } from '@/widgets/ChooseFavoriteBlock/ChooseFavoriteBlock.config';

import CharacteristicText from './components/CharacteristicText/CharacteristicText';

export type PersonInfoModalWindow = {
  isOpen: boolean;
  handleCloseDialog: () => void;
} & PersonServerModel;

const PersonInfoModalWindow = ({
  isOpen = true,
  handleCloseDialog,
  ...restProps
}: PersonInfoModalWindow) => {
  const {
    name,
    mass,
    height,
    birth_year,
    eye_color,
    gender,
    hair_color,
    skin_color,
  } = restProps;

  const isGenderOrBirth =
    isGender(gender) || (birth_year && startsWithNumber(birth_year));

  const genderImage = () => {
    if (!isGender(gender))
      return (
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          width={'340px'}
          height={'300px'}
        >
          <Text
            fontSize={pixelsToRem(160)}
            color={'white'}
            textAlign={'center'}
            verticalAlign={'center'}
          >
            ?
          </Text>
        </Box>
      );

    return (
      <Image
        alt={`${gender} gender`}
        src={`/images/genders/${gender.trim()}-icon.png`}
        position={{ base: 'static', bp580: 'absolute' }}
        marginInline={{ base: '0', bp580: 'auto' }}
        insetInline={{ base: 'auto', bp580: '0' }}
        insetBlockStart={{ base: 'auto', bp580: '50%' }}
        transform={{ base: 'none', bp580: 'translateY(-50%)' }}
        width={'340px'}
      />
    );
  };

  return (
    <DialogRoot
      placement={'center'}
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={() => handleCloseDialog()}
      size={{ base: 'sm', bp768: 'lg', bp1024: 'xl' }}
    >
      <DialogContent maxWidth={'796px'}>
        <DialogBody width={'100%'}>
          <Stack
            direction={{ base: 'column-reverse', bp580: 'row' }}
            gap={0}
            minHeight={'370px'}
          >
            {isGenderOrBirth && (
              <Box
                width={{ base: '100%', bp580: '45%' }}
                background={'#1F2A63'}
                boxShadow={'4px 4px 8px 0px #011C4033'}
                borderTopLeftRadius={{ base: 'none', bp580: 'lg' }}
                borderBottomLeftRadius={{ base: 'none', bp580: 'lg' }}
                position={'relative'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                {genderImage()}
                <Stack
                  direction={'row'}
                  gap={'12px'}
                  marginTop={'12px'}
                  className={robotoFont.className}
                  position={'absolute'}
                  bottom={'16px'}
                  right={'14px'}
                >
                  {gender && isGender(gender) && (
                    <PersonCardBadge text={gender} type={gender} />
                  )}

                  {birth_year && startsWithNumber(birth_year) && (
                    <PersonCardBadge text={birth_year} type={'birthYear'} />
                  )}
                </Stack>
              </Box>
            )}
            <Box
              width={{ base: '100%', bp580: !isGenderOrBirth ? '100%' : '55%' }}
              background={
                'linear-gradient(180deg, #17002F 42.19%, #1F2A63 100%)'
              }
              minHeight={'370px'}
              padding={'30px 75px 25px 14px'}
              borderTopRightRadius={{ base: 'none', bp580: 'lg' }}
              borderBottomRightRadius={{ base: 'none', bp580: 'lg' }}
              borderTopLeftRadius={{
                base: 'none',
                bp580: !isGenderOrBirth ? 'lg' : 'none',
              }}
              borderBottomLeftRadius={{
                base: 'none',
                bp580: !isGenderOrBirth ? 'lg' : 'none',
              }}
            >
              <Text
                fontSize={pixelsToRem(36)}
                fontWeight={700}
                color={'#FDFDFD'}
                lineHeight={'42.08px'}
              >
                {name}
              </Text>
              <Box
                background={'#FDFDFD'}
                borderRadius={'lg'}
                marginTop={'26px'}
                padding={'14px 23px 16px 23px'}
              >
                <CharacteristicText title="hair color" value={hair_color} />

                <CharacteristicText title="skin color" value={skin_color} />

                <CharacteristicText title="eye color" value={eye_color} />
              </Box>
              <Stack
                direction={'row'}
                gap={'22px'}
                align={'center'}
                marginTop={'76px'}
              >
                {!isNaN(parseInt(height)) && (
                  <Box
                    background={'#FDFDFD'}
                    borderRadius={'lg'}
                    boxShadow={'4px 4px 24px 0px #01112633'}
                    padding={'8px 16px'}
                  >
                    <RoundAnthropometryValue title="height" value={height} />
                  </Box>
                )}

                {!isNaN(parseInt(mass)) && (
                  <Box
                    background={'#FDFDFD'}
                    borderRadius={'lg'}
                    boxShadow={'4px 4px 24px 0px #01112633'}
                    padding={'8px 16px'}
                  >
                    <RoundAnthropometryValue title="mass" value={mass} />
                  </Box>
                )}
              </Stack>
            </Box>
          </Stack>
        </DialogBody>
        <DialogCloseTrigger
          top="0"
          insetY="-16"
          insetInlineEnd={'-1rem'}
          closeButtonProps={{
            _hover: {
              background: 'none',
            },
            _focusVisible: {
              outline: 'none',
            },
            size: '2xl',
          }}
        >
          <CloseIcon />
        </DialogCloseTrigger>
      </DialogContent>
    </DialogRoot>
  );
};

export default PersonInfoModalWindow;
