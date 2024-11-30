"use client";
import { pixelsToRem } from "@/helpers/pixelsToRem";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/shared/ui";
import {
  Box,
  Center,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { source_Sans_3 } from "@/app/fonts/fonts";

import StarWarsPersonCard from "@/widgets/StarWarsPersonCard/StarWarsPersonCard";
import { useGetPeopleQuery } from "@/state/api/people/peopleApi";
import SimplePagination from "@/widgets/SimplePagination/SimplePagination";
import { useMemo, useState } from "react";
import {
  ColorEyeValues,
  frameworks,
} from "@/widgets/CharactersChooseFavorite/CharactersChooseFavorite.config";
import { roundToTwoDecimals } from "@/helpers/roundToTwoDecimals";

// ?NOTE: фильтрация персонажей реализована в компоненте для каждой страницы, а не для всех, чтобы фильтровать все элементы с учетом пагинации, необходима поддержка бека
const CharactersChooseFavorite = () => {
  // Local State
  const [page, setPage] = useState<number>(1);
  const [colorEye, setColorEye] = useState<ColorEyeValues>(ColorEyeValues.All);

  // API
  const {
    data: fetchedStarWarsPeople,
    isLoading,
    isError,
  } = useGetPeopleQuery(page);

  const handleChangeColorEyeSelect = (newValue: ColorEyeValues) => {
    setColorEye(newValue);
  };

  const filteredPeopleByColorEyes = useMemo(() => {
    if (
      !fetchedStarWarsPeople ||
      !fetchedStarWarsPeople.results ||
      fetchedStarWarsPeople.results.length === 0
    )
      return;

    if (colorEye === ColorEyeValues.All) return fetchedStarWarsPeople.results;

    return fetchedStarWarsPeople.results.filter(
      (elem) => elem.eye_color === colorEye
    );
  }, [fetchedStarWarsPeople, colorEye]);

  if (isLoading)
    return (
      <Center height={"100%"}>
        <ProgressCircleRoot size="xl" value={null} colorPalette={"yellow"}>
          <ProgressCircleRing cap="round" />
        </ProgressCircleRoot>
      </Center>
    );

  // Layout
  const personCards = () => {
    return filteredPeopleByColorEyes?.map((elem) => (
      <StarWarsPersonCard
        key={elem.id}
        name={elem.name}
        height={elem.height}
        mass={elem.mass}
        gender={elem.gender}
        birthYear={elem.birth_year}
      />
    ));
  };
  return (
    <Box>
      <Container
        width={"100%"}
        margin={"0 auto"}
        padding={{
          base: "10px 16px 10px 16px",
          bp580: "10px 40px 10px 40px",
          bp1024: "10px 80px 10px 80px",
          bp1440: "28px 157px 225px 157px",
        }}
      >
        <Text fontSize={pixelsToRem(16)} color={"#4B4B4B"} textAlign={"right"}>
          language: en
        </Text>

        <Text
          fontSize={pixelsToRem(35)}
          color={"#000000"}
          textAlign={"center"}
          lineHeight={"40.92px"}
          fontWeight={600}
          marginTop={"28px"}
          textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        >
          <Box as={"span"} fontWeight={700}>
            {fetchedStarWarsPeople?.count} Peoples
          </Box>{" "}
          for you to choose your favorite
        </Text>
        <Stack
          direction={{ base: "column-reverse", bp768: "row" }}
          width={"100%"}
          justify={"space-between"}
          marginTop={"28px"}
          gap={{ base: "12px", bp768: "0" }}
          alignItems={{ base: "center", bp768: "baseline" }}
        >
          <SelectRoot
            collection={frameworks}
            size="xs"
            display={"flex"}
            flexDirection={"row"}
            gap={"18px"}
            width={"220px"}
            alignItems={"baseline"}
            value={[colorEye]}
            onValueChange={(event) => {
              console.log("event.value: ", event.value);
              handleChangeColorEyeSelect(event.value[0] as ColorEyeValues);
            }}
          >
            <SelectLabel
              fontSize={pixelsToRem(16)}
              color={"#212121"}
              className={source_Sans_3.className}
            >
              color eye
            </SelectLabel>
            <SelectTrigger
              width={"135px"}
              valueContainerProps={{
                display: "flex",
                justifyContent: "center",
                minHeight: "24px",
                fontSize: pixelsToRem(16),
                color: "#000000",
                background: "#F2F2F2",
                border: "none",
                cursor: "pointer",
                boxShadow: "2px 2px 2px 0px #2121211A",
              }}
              indicatorGroupProps={{ right: "6px" }}
            >
              <SelectValueText />
            </SelectTrigger>
            <SelectContent
              background={"#F2F2F2"}
              padding={"16px 59px 16px 32px"}
              gap={"10px"}
              boxShadow="4px 4px 8px 0px #011C4033"
            >
              {frameworks.items.map((movie) => (
                <SelectItem item={movie} key={movie.value} cursor={"pointer"}>
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
              paginationRootProps={{ size: { base: "xs", bp768: "md" } }}
            />
          )}
        </Stack>
        {filteredPeopleByColorEyes && filteredPeopleByColorEyes.length !== 0 ? (
          <SimpleGrid
            columns={{ base: 1, bp768: 2, bp1024: 3 }}
            columnGap="42px"
            justifyItems={"center"}
            rowGap="32px"
            marginTop={"30px"}
          >
            {personCards()}
          </SimpleGrid>
        ) : (
          <Text
            fontSize={pixelsToRem(30)}
            fontWeight={700}
            textAlign={"center"}
            marginTop={"120px"}
          >
            Oops, no character with that eye color found on current page
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default CharactersChooseFavorite;
