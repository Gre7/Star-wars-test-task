import { createListCollection } from "@chakra-ui/react";

export enum ColorEyeValues {
  All = "all",
  Brown = "brown",
  Red = "red",
  Blue = "blue",
  White = "white",
}

export const frameworks = createListCollection({
  items: [
    { label: "All", value: ColorEyeValues.All },
    { label: "Brown", value: ColorEyeValues.Brown },
    { label: "Red", value: ColorEyeValues.Red },
    { label: "Blue", value: ColorEyeValues.Blue },
    { label: "White", value: ColorEyeValues.White },
  ],
});
