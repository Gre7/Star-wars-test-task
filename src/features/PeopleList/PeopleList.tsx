import { SimpleGrid, Text } from '@chakra-ui/react';

import StarWarsPersonCard from '@/entities/StarWarsPersonCard/StarWarsPersonCard';
import { pixelsToRem } from '@/helpers/pixelsToRem';
import { PersonServerModel } from '@/state/api/people/peopleApi.types';

export type PeopleListProps = {
  items: PersonServerModel[];
  handleItemClick: (personEntity: PersonServerModel) => void;
};

const PeopleList = ({ items, handleItemClick }: PeopleListProps) => {
  if (items.length === 0)
    return (
      <Text
        fontSize={pixelsToRem(30)}
        fontWeight={700}
        textAlign={'center'}
        marginTop={'120px'}
      >
        Oops, no character with that eye color found on current page
      </Text>
    );

  const personCards = () => {
    return items.map((elem) => (
      <StarWarsPersonCard
        key={elem.url}
        name={elem.name}
        height={elem.height}
        mass={elem.mass}
        gender={elem.gender}
        birthYear={elem.birth_year}
        handleClick={() => handleItemClick(elem)}
      />
    ));
  };

  return (
    <SimpleGrid
      columns={{ base: 1, bp768: 2, bp1024: 3 }}
      columnGap="42px"
      justifyItems={'center'}
      rowGap="32px"
      marginTop={'30px'}
    >
      {personCards()}
    </SimpleGrid>
  );
};

export default PeopleList;
