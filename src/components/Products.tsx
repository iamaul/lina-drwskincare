import * as React from 'react';
import {
    Box,
    Input,
    Stack,
    Flex,
    Text,
    Image,
    FormLabel,
    FormControl,
} from '@chakra-ui/react';  

import { ProductType } from '@/model/Product';
import { Card } from './Card';
import { Intersection } from './Intersection';

import { debounce } from '@/helpers/debounce';

interface ProductProps {
    products: ProductType[];
}

type State = {
    totalProducts: ProductType[];
    products: ProductType[];
    filteredProducts: ProductType[];
    productsLength: number;
}

type Action = { type: 'SEARCH' | 'LOAD_MORE'; payload?: string };

const productReducer = (state: State, action: Action): State => {
    const { type, payload } = action;
    const { productsLength, totalProducts, filteredProducts } = state;

    switch (type) {
        case 'LOAD_MORE': {
            const newLength = Math.max(
                10,
                Math.min(productsLength + 10, filteredProducts.length)
            );

            return {
                ...state,
                products: filteredProducts.slice(0, newLength),
                productsLength: newLength,
            }
        }

        case 'SEARCH': {
            let searchTerm = payload!.toLowerCase();

            if (searchTerm.trim() === '') {
                return {
                    ...state,
                    products: totalProducts.slice(0, productsLength),
                    filteredProducts: totalProducts,
                }
            }

            const searchResults = totalProducts.filter(({ product_description }) =>
                product_description.toLowerCase().includes(searchTerm)
            )

            return {
                ...state,
                products: searchResults,
                filteredProducts: searchResults,
            }
        }

        default: {
            return { ...state }
        }
    }
}

export const Products = ({ products }: ProductProps) => {
    const initialState = {
        totalProducts: products,
        filteredProducts: products,
        products: products.slice(0, 10),
        productsLength: 10,
    }

    const [state, dispatch] = React.useReducer(productReducer, initialState);

    const loadMore = React.useCallback(() => {
        dispatch({ type: 'LOAD_MORE' });
    }, []);

    const filterOnSearch = debounce((value: string) => {
        dispatch({ type: 'SEARCH', payload: value });
    }, 400);

    return (
        <Stack pt="20" w={['100%', '70%']}>
            <Box mb="1rem">
                <FormControl>
                    <FormLabel>🔎 Search</FormLabel>
                    <Input
                        placeholder="Kata kunci: night cream, day cream, serum, lipstick, dan lain-lain .."
                        onChange={(e) => { filterOnSearch(e.target.value) }}
                    />
                </FormControl>
            </Box>
            <Flex
                flexWrap="wrap"
                w="100%"
                justifyContent="center"
                alignItems="center"
            >
                {state.products.map((e) => (
                    <Card product_name={e.product_name} product_detail_name={e.product_detail_name} product_description={e.product_description} product_usage={e.product_usage} product_image={e.product_image} key={e.product_name} />
                ))}
                {state.products.length === 0 && (
                    <Box width="40%" margin="0 auto">
                        <Image src="/pixeltrue-seo.svg" />
                        <Text textAlign="center" fontWeight="bold">No products found</Text>
                    </Box>
                )}
                <Intersection onVisible={() => loadMore()} />
            </Flex>
        </Stack>
    )
}