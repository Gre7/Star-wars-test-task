import { GetResponseWithData } from '@/customTypes/api.common';

export enum PersonGenders {
  Male = 'male',
  Female = 'female',
  Hermaphrodite = 'hermaphrodite',
}

export type PersonServerModel = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: PersonGenders;
  url: string;
};

export type GetPeopleResponse = GetResponseWithData<PersonServerModel>;
