"use client";
import { Box, Container, Image, Stack } from "@chakra-ui/react";

import { NavigationPageUrls, PageRoutes } from "@/config/navigation";
import NavigationList from "@/widgets/NavigationList/NavigationList";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      as="header"
      width={"100%"}
      zIndex={10}
      background={"#1F2A63"}
      height={{ base: "170px", bp580: "auto" }}
      boxShadow={"0px 4px 4px 0px rgba(255, 255, 255, 0.25)"}
    >
      <Container
        position={"relative"}
        width={"100%"}
        margin={"0 auto"}
        height={"inherit"}
        padding={{
          base: "10px 12px 3px 16px",
          bp580: "10px 40px 3px 40px",
          bp1024: "10px 80px 3px 80px",
          bp1440: "10px 157px 3px 157px",
        }}
      >
        <Stack
          direction={{ base: "column", bp580: "row" }}
          align={"center"}
          justify={"space-between"}
          gap={{ base: 4, bp580: 0 }}
        >
          <Link href={NavigationPageUrls.HomePage}>
            <picture>
              <source
                src="/images/logo/star-wars-logo.webp"
                type="image/webp"
              />
              <Image
                src="/images/logo/star-wars-logo.webp"
                alt="Star Wars Logo"
                width={"150px"}
              />
            </picture>
          </Link>

          <NavigationList items={PageRoutes} />
        </Stack>
      </Container>
    </Box>
  );
};
export default Header;
