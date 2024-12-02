'use client';

import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { NavigationPageUrls } from '@/config/navigation';
import { pixelsToRem } from '@/helpers/pixelsToRem';

const CustomNotFound = () => {
  return (
    <Box background={'#17002F'} height={'100%'}>
      <Container
        width={'100%'}
        margin={'0 auto'}
        padding={{
          base: '24px 16px',
          bp580: '32px 24px',
          bp1024: '72px 62px',
          bp1440: '96px 82px',
        }}
      >
        <Stack
          direction="column"
          height={{
            base: 'calc(100vh - 170px)',
            bp580: 'calc(100vh - 93px)',
            bp768: '100%',
          }}
          alignItems={'center'}
          justifyContent={'center'}
          gap={{ base: '20px', bp580: '40px', bp1024: '0' }}
        >
          <Box
            position={'relative'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text
              fontSize={{
                base: pixelsToRem(200),
                bp580: pixelsToRem(300),
                bp768: pixelsToRem(350),
                bp1024: pixelsToRem(500),
                bp1440: pixelsToRem(700),
              }}
              fontWeight={700}
              lineHeight={'130%'}
              color={'#FFFFFF80'}
              textAlign={'center'}
            >
              404
            </Text>
            <picture>
              <source
                srcSet="/images/404/death-star3x.webp 1x, /images/404/death-star4x.webp 2x"
                type="image/webp"
              />
              <Image
                src="/images/404/death-star3x.png"
                srcSet="/images/404/death-star3x.png 1x, /images/404/death-star4x.png 2x"
                alt="Death star"
                width={{
                  base: '200px',
                  bp580: '300px',
                  bp768: '360px',
                  bp1024: '480px',
                  bp1440: '690px',
                }}
                height={'auto'}
                position={'absolute'}
                marginInline="auto"
                insetInline="0"
                insetBlockStart="50%"
                transform="translateY(-50%)"
              />
            </picture>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Link href={NavigationPageUrls.HomePage}>
              <Button
                maxWidth={{ base: '100%', bp580: '231px' }}
                width={'100%'}
                height={'66px'}
                fontWeight={700}
                color={'#212121'}
                fontSize={pixelsToRem(24)}
                padding={'16px 58px'}
                background={'#73D677'}
                boxShadow={'0px -9px 0px 0px #0000002E inset'}
                borderRadius={'xl'}
              >
                Return
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default CustomNotFound;
