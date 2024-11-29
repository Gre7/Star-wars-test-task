import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { pixelsToRem } from "@/helpers/pixelsToRem";
import Link from "next/link";
import { NavigationPageUrls } from "@/config/navigation";

const MainPageBanner = () => {
  return (
    <Box background={"linear-gradient(180deg, #1F2A63 0%, #17002F 100%)"}>
      <Container
        width={"100%"}
        margin={"0 auto"}
        padding={{
          base: "68px 60px 184px 60px",
          bp1280: "68px 0 184px 156px",
        }}
        height={"100%"}
      >
        <Stack
          direction={{ base: "column", bp1280: "row" }}
          justify={"space-between"}
          align={{ base: "center", bp1280: "flex-start" }}
        >
          <Stack
            direction={"column"}
            gap={"64px"}
            maxWidth={{ base: "100%", bp1280: "516px" }}
            marginTop={"60px"}
          >
            <Text
              fontSize={pixelsToRem(72)}
              fontWeight={700}
              lineHeight={"84.17px"}
              letterSpacing={"4px"}
              color={"white"}
              as={"h1"}
            >
              Find{" "}
              <Box as={"span"} fontWeight={400}>
                all your favorite
              </Box>{" "}
              character
            </Text>
            <Text
              fontSize={pixelsToRem(32)}
              fontWeight={400}
              lineHeight={"37.41px"}
              color={"white"}
              as={"h2"}
            >
              You can find out all the information about your favorite
              characters
            </Text>
            <Link href={NavigationPageUrls.CharactersPage}>
              <Button
                maxWidth={{ base: "100%", bp580: "266px" }}
                width={"100%"}
                height={"66px"}
                fontWeight={700}
                color={"#212121"}
                fontSize={pixelsToRem(24)}
                padding={"16px 58px"}
                background={"#FFC107"}
                boxShadow={"0px -9px 0px 0px #0000002E inset"}
                borderRadius={"xl"}
              >
                See more...
              </Button>
            </Link>
          </Stack>
          <Box
            width={"100%"}
            maxWidth={"793px"}
            maxHeight={"680px"}
            display={{ base: "none", bp768: "block" }}
          >
            <picture>
              <source
                srcSet="/images/banners/star-wars-main-banner2x.webp 1x, /images/banners/star-wars-main-banner3x.webp 2x"
                type="image/webp"
              />
              <Image
                src="/images/banners/star-wars-main-banner2x.png"
                srcSet="/images/banners/star-wars-main-banner2x.png 1x, /images/banners/star-wars-main-banner3x.png 2x"
                alt="Master Yoda"
                width={"100%"}
                height={"auto"}
              />
            </picture>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default MainPageBanner;
