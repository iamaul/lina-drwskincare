import {
    Box,
    Button,
    Image,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';

import NavLink from 'next/link';
import { NextSeo } from 'next-seo';

import { BiArrowBack } from 'react-icons/bi';

import Container from '@/components/Container';

const Page404 = () => {
    return (
        <>
            <NextSeo title={'😲 Oops! Page Not Found'} titleTemplate='%s' />
            <Container>
                <Box width="50%" margin="0 auto" py={{ base: 20, md: 28 }}>
                    <Image src="/404.svg" />
                    <Heading textAlign="center">Page not found</Heading>
                    <Box textAlign="center" marginTop={3}>
                        <NavLink href="/" passHref>
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                backgroundColor={useColorModeValue('gray.100', '#FF0080')}
                                leftIcon={<BiArrowBack />}
                            >
                                Back
                            </Button>
                        </NavLink>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Page404;