import { HStack, Icon, Link, Stack, Text } from '@chakra-ui/react';

import NextLink from 'next/link'

import { useSocialMedia } from './Hooks';
import routes from '@/routes';

const Footer = () => {
    const socials = useSocialMedia()
    return (
        <Stack my={3} align='center' spacing={4} maxW='4xl' mx='auto'>
            {/* <HStack spacing={6}>
                {routes.map(([text, href]) => (
                    <div key={href}>
                        <NextLink href={href} key={href}>
                            <Link href={href}>{text}</Link>
                        </NextLink>
                    </div>
                ))}
            </HStack> */}
            <HStack spacing={4}>
                {socials.map(([href, IconType]) => (
                    <Link href={href} isExternal key={href}>
                        <Icon as={IconType} boxSize={5} />
                    </Link>
                ))}
            </HStack>
            <Text fontSize='smaller'>
                Lina LA DRW Skincare Merauke
            </Text>
            <Text fontSize='xs'>
                Copyright &copy; 2021; Made with ❤️ by <NextLink href="https://iamaul.me"><Link href="https://iamaul.me">iamaul</Link></NextLink>
            </Text>
        </Stack>
    )
}

export default Footer;