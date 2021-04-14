import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { ContainerProduct } from '@/components/ContainerProduct';
import { Products } from '@/components/Products';
import { ProductType } from '@/model/Product';

import products from '@/data/products.json';

const Index = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <ContainerProduct>
        <Products products={products} />
    </ContainerProduct>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const productsData: ProductType[] = products;

  return {
    props: {
      products: productsData,
    },
  };
};

export default Index;