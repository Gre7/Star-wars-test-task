import { createListCollection } from '@chakra-ui/react';

import { PersonGenders } from '@/state/api/people/peopleApi.types';

export enum ColorEyeValues {
  All = 'all',
  Brown = 'brown',
  Red = 'red',
  Blue = 'blue',
  White = 'white',
}

const validGenders = new Set(Object.values(PersonGenders));

export const isGender = (value: string): boolean => {
  return validGenders.has(value as PersonGenders);
};

export const frameworks = createListCollection({
  items: [
    { label: 'All', value: ColorEyeValues.All },
    { label: 'Brown', value: ColorEyeValues.Brown },
    { label: 'Red', value: ColorEyeValues.Red },
    { label: 'Blue', value: ColorEyeValues.Blue },
    { label: 'White', value: ColorEyeValues.White },
  ],
});
