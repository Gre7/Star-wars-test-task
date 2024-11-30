import { pixelsToRem } from "@/helpers/pixelsToRem";
import { Badge, Box, Stack, Text } from "@chakra-ui/react";
import { robotoFont } from "@/app/fonts/fonts";
import clsx from "clsx";
import { PersonGenders } from "@/state/api/people/peopleApi.types";

import RoundAnthropometryValue from "./components/RoundAnthropometryValue/RoundAnthropometryValue";
import styles from "./styles.module.scss";

export type StarWarsPersonCardProps = {
  name: string;
  height: string;
  mass: string;
  gender?: PersonGenders;
  birthYear?: string;
};

const StarWarsPersonCard = ({
  name,
  height,
  mass,
  gender,
  birthYear,
}: StarWarsPersonCardProps) => {
  return (
    <Box
      background={"#F0F0F0"}
      borderRadius={"lg"}
      width={"100%"}
      maxWidth={"352px"}
      height={"136px"}
      padding={"5px 0 12px 25px"}
      cursor="pointer"
    >
      <Text
        as={"h3"}
        fontSize={pixelsToRem(18)}
        fontWeight={700}
        color={"#212121"}
        lineHeight={"21.04px"}
      >
        {name}
      </Text>
      <Stack direction={"row"} gap={"12px"} marginTop={"12px"}>
        <RoundAnthropometryValue title="height" value={height} />

        <RoundAnthropometryValue title="mass" value={mass} />
      </Stack>
      <Stack
        direction={"row"}
        gap={"12px"}
        marginTop={"12px"}
        className={robotoFont.className}
      >
        {gender && (gender as string) !== "n/a" && (
          <Badge
            className={clsx(
              styles["person-card-badge"],
              gender && styles[`person-card-badge_${gender}`]
            )}
          >
            {gender}
          </Badge>
        )}
        {birthYear && birthYear !== "unknown" && (
          <Badge
            className={clsx(
              styles["person-card-badge"],
              gender && styles[`person-card-badge_birthYear`]
            )}
          >
            {birthYear}
          </Badge>
        )}
      </Stack>
    </Box>
  );
};

export default StarWarsPersonCard;
