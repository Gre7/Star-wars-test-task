'use client';
import { useMemo, useState } from 'react';

import { Box, Center, Container, Stack, Text } from '@chakra-ui/react';

import { source_Sans_3 } from '@/app/fonts/fonts';
import PeopleList from '@/features/PeopleList/PeopleList';
import PersonInfoModalWindow from '@/features/PersonInfoModalWindow/PersonInfoModalWindow';
import { pixelsToRem } from '@/helpers/pixelsToRem';
import {
  ProgressCircleRing,
  ProgressCircleRoot,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/shared/ui';
import { useGetPeopleQuery } from '@/state/api/people/peopleApi';
import { PersonServerModel } from '@/state/api/people/peopleApi.types';
import {
  ColorEyeValues,
  frameworks,
} from '@/widgets/ChooseFavoriteBlock/ChooseFavoriteBlock.config';
import SimplePagination from '@/widgets/SimplePagination/SimplePagination';

// ?NOTE: фильтрация персонажей реализована в компоненте для каждой страницы, а не для всех, чтобы фильтровать все элементы с учетом пагинации, необходима поддержка бека
const ChooseFavoriteBlock = () => {
  // Local State
  const [page, setPage] = useState<number>(1);
  const [colorEye, setColorEye] = useState<ColorEyeValues>(ColorEyeValues.All);

  const [currentPerson, setCurrentPerson] = useState<PersonServerModel | null>(
    null,
  );

  // API
  const {
    data: fetchedStarWarsPeople,
    isLoading,
    isError,
  } = useGetPeopleQuery(page);

  // Handlers
  const handleChangeColorEyeSelect = (newValue: ColorEyeValues) => {
    setColorEye(newValue);
  };

  const handleOpenDialog = (personEntity: PersonServerModel) => {
    setCurrentPerson(personEntity);
  };

  const handleCloseDialog = () => {
    setCurrentPerson(null);
  };

  const filteredPeopleByColorEyes = useMemo(() => {
    if (
      !fetchedStarWarsPeople ||
      !fetchedStarWarsPeople.results ||
      fetchedStarWarsPeople.results.length === 0
    )
      return [];

    if (colorEye === ColorEyeValues.All) return fetchedStarWarsPeople.results;

    return fetchedStarWarsPeople.results.filter(
      (elem) => elem.eye_color === colorEye,
    );
  }, [fetchedStarWarsPeople, colorEye]);

  // Layout

  if (isLoading)
    return (
      <Center height={'100%'}>
        <ProgressCircleRoot size="xl" value={null} colorPalette={'yellow'}>
          <ProgressCircleRing cap="round" />
        </ProgressCircleRoot>
      </Center>
    );

  if (isError) {
    return (
      <Center height={'100%'}>
        <Text fontSize={pixelsToRem(32)} color={'#000000'}>
          Failed to load data. Please try again later.
        </Text>
      </Center>
    );
  }

  return (
    <Box>
      <Container
        width={'100%'}
        margin={'0 auto'}
        padding={{
          base: '10px 16px 10px 16px',
          bp580: '10px 40px 10px 40px',
          bp1024: '10px 80px 10px 80px',
          bp1440: '28px 157px 225px 157px',
        }}
      >
        <Text fontSize={pixelsToRem(16)} color={'#4B4B4B'} textAlign={'right'}>
          language: en
        </Text>

        <Text
          fontSize={pixelsToRem(35)}
          color={'#000000'}
          textAlign={'center'}
          lineHeight={'40.92px'}
          fontWeight={600}
          marginTop={'28px'}
          textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        >
          <Box as={'span'} fontWeight={700}>
            {fetchedStarWarsPeople?.count} Peoples
          </Box>{' '}
          for you to choose your favorite
        </Text>
        <Stack
          direction={{ base: 'column-reverse', bp768: 'row' }}
          width={'100%'}
          justify={'space-between'}
          marginTop={'28px'}
          gap={{ base: '12px', bp768: '0' }}
          alignItems={{ base: 'center', bp768: 'baseline' }}
        >
          <SelectRoot
            collection={frameworks}
            size="xs"
            display={'flex'}
            flexDirection={'row'}
            gap={'18px'}
            width={'220px'}
            alignItems={'baseline'}
            value={[colorEye]}
            onValueChange={(event) => {
              handleChangeColorEyeSelect(event.value[0] as ColorEyeValues);
            }}
          >
            <SelectLabel
              fontSize={pixelsToRem(16)}
              color={'#212121'}
              className={source_Sans_3.className}
            >
              color eye
            </SelectLabel>
            <SelectTrigger
              width={'135px'}
              valueContainerProps={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: '24px',
                fontSize: pixelsToRem(16),
                color: '#000000',
                background: '#F2F2F2',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '2px 2px 2px 0px #2121211A',
              }}
              indicatorGroupProps={{ right: '6px' }}
            >
              <SelectValueText />
            </SelectTrigger>
            <SelectContent
              background={'#F2F2F2'}
              padding={'16px 59px 16px 32px'}
              gap={'10px'}
              boxShadow="4px 4px 8px 0px #011C4033"
            >
              {frameworks.items.map((movie) => (
                <SelectItem item={movie} key={movie.value} cursor={'pointer'}>
                  {movie.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
          {fetchedStarWarsPeople && (
            <SimplePagination
              page={page}
              setPage={setPage}
              totalCount={fetchedStarWarsPeople?.count}
              paginationRootProps={{ size: { base: 'xs', bp768: 'md' } }}
            />
          )}
        </Stack>
        <PeopleList
          items={filteredPeopleByColorEyes}
          handleItemClick={handleOpenDialog}
        />
      </Container>
      {currentPerson && (
        <PersonInfoModalWindow
          isOpen={!!currentPerson}
          handleCloseDialog={handleCloseDialog}
          {...currentPerson}
        />
      )}
    </Box>
  );
};

export default ChooseFavoriteBlock;
