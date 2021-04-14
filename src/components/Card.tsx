import * as React from 'react';

import { 
    Text, 
    Flex, 
    Image, 
    useColorMode, 
} from '@chakra-ui/react';

import { ProductType } from '@/model/Product';

import MotionBox from './MotionBox';

export const Card = ({ 
    product_name,
    product_detail_name,
    product_description,
    product_usage,
    product_image
}: ProductType) => {
    const { colorMode } = useColorMode();

    const cardColor = { light: 'gray.10', dark: '#2b2b2b' };
    const hoverCardColor = { light: 'blue.50', dark: '#202020' };

    return (
        // <Flex
        //     minW={['8rem', '10rem']}
        //     minH={['8rem', '10rem']}
        //     maxW="12rem"
        //     borderWidth="2px"
        //     borderRadius="lg"
        //     flexDirection="column"
        //     m="0 20px 20px 0"
        //     boxShadow="sm"
        //     bg={cardColor[colorMode]}
        //     textAlign="center"
        //     cursor="pointer"
        //     _hover={{ backgroundColor: `${hoverCardColor[colorMode]}` }}
        //     transition="all 200ms ease-in"
        // >
            <MotionBox
                position="relative"
                textAlign="center"
                whileHover={{ scale: 1.05 }}
                role="group"
            >
                <Flex
                    px="10px"
                    py="25px"
                    justifyContent="center"
                    w="100%"
                    borderRadius="full"
                    wordBreak="break-all"
                >
                    <Image
                        src={product_image ? `/static/images/${product_image}.jpeg` : '/questions.svg'}
                        width="10rem"
                        height="13.1rem"
                        borderRadius="sm"
                        // _groupHover={{ opacity: 0.5 }}
                        style={{
                            filter: `drop-shadow(0 0 0.10rem ${
                                colorMode === "light" ? "gray" : "black"
                            })`
                        }}
                        alt={`${product_image}`}
                    />
                </Flex>
                <Text
                    textTransform="uppercase"
                    fontSize="xs"
                    fontWeight="bold"
                    letterSpacing={2}
                    textAlign="center"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    visibility="hidden"
                    color="white"
                    _groupHover={{ visibility: "visible" }}
                >
                    {product_name}
                </Text>
            </MotionBox>
        // </Flex>
    )
}