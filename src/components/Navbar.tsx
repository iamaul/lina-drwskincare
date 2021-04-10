import { Flex, HStack, Button, useColorModeValue, Text } from '@chakra-ui/react';

import NextLink from 'next/link';

import routes from '@/routes';
import siteConfig from '~/site.config';

import MobileDrawer from './MobileDrawer';
import ToggleColorMode from './ToggleColorMode';

const Navbar = () => {
    return (
        <Flex
            as="nav"
            pos="fixed"
            w={'full'}
            justify="space-between"
            align="center"
            px={{ base: 4, md: 20 }}
            py={3}
            top={0}
            boxShadow={'sm'}
            zIndex="999"
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            css={{
                backdropFilter: 'saturate(180%) blur(5px)',
                backgroundColor: useColorModeValue(
                  'rgba(255, 255, 255, 0.8)',
                  'rgba(26, 32, 44, 0.8)'
                ),
            }}
        >
            <Text fontSize="xl" fontWeight="bold">
                {siteConfig.title}
            </Text>
  
            <HStack d={{ base: "none", md: "flex" }} spacing={6}>
                {routes.map(([text, href]) => (
                    <div key={href}>
                        <NextLink href={href} key={href} passHref>
                            <Button
                                as="a"
                                // {...(href ? { target: "_blank" } : {})}
                                variant="ghost"
                                >
                                    {text}
                            </Button>
                        </NextLink>
                    </div>
                ))}
                <ToggleColorMode />
            </HStack>
            <MobileDrawer />
        </Flex>
    )
}
  
export default Navbar;