import { NavigationItemType } from "@/config/navigation";
import { NavigationItem } from "@/shared/ui";
import { Stack } from "@chakra-ui/react";

export type NavigationListProps = {
  items: NavigationItemType[];
};

const NavigationList = ({ items }: NavigationListProps) => {
  return (
    <Stack direction={"row"} gap={"74px"}>
      {items.map((elem) => (
        <NavigationItem key={elem.title} title={elem.title} href={elem.href} />
      ))}
    </Stack>
  );
};

export default NavigationList;
