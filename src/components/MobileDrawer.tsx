import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Icon,
    IconButton,
    Button,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { AiOutlineMenu } from 'react-icons/ai';

import routes from '@/routes';
import siteConfig from '~/site.config';

import ToggleColorMode from './ToggleColorMode';

const MobileDrawer = () => {
    const { onClose, onOpen, isOpen } = useDisclosure();

    return (
        <>
            <IconButton
                d={{ base: 'block', md: 'none' }}
                aria-label='Mobile Menu'
                bg={'#FF0080'}
                isRound
                icon={<Icon as={AiOutlineMenu} />}
                onClick={onOpen}
            />
            <Drawer onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader p={8}>{siteConfig.title}</DrawerHeader>
                        <DrawerBody p={8}>
                            <VStack align='start' spacing={6}>
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
                            </VStack>
                        </DrawerBody>
                        <DrawerFooter justifyContent='start' px={4} py={8}>
                            <ToggleColorMode />
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}
  
export default MobileDrawer;