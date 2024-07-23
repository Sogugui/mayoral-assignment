import { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { initialData } from 'seed/seed';
import TopMenu from '@components/ui/TopMenu';
import { Product } from 'interfaces/product';
import ProductGrid from '@components/products/ProductGrid';
import SortFilter from '@components/ui/SortFilter';

interface SearchBarProps {
  products: Product[];
}

export interface FilterParams extends ParsedUrlQuery {
  sort?: string;
  searchQuery?: string;
  price?: string;
}

const SearchBar: FC<SearchBarProps> = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <TopMenu />
      <div className="md:col-span-3">
        <SortFilter />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default SearchBar;

export async function getServerSideProps({ query }: { query: FilterParams }) {
  const sort = query.sort || '';
  const searchQuery = query.searchQuery || '';

  const filteredProducts = initialData.mayoralProducts.filter((product) =>
    searchQuery === 'all' || searchQuery === ''
      ? true
      : product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = parseFloat(a.price.replace('€', '').replace(',', '.'));
    const priceB = parseFloat(b.price.replace('€', '').replace(',', '.'));
    if (sort === 'lowest') {
      return priceA - priceB;
    } else if (sort === 'highest') {
      return priceB - priceA;
    }
    return Number(a.id.replace(/\D/g, '')) - Number(b.id.replace(/\D/g, ''));
  });

  return {
    props: {
      products: sortedProducts,
    },
  };
}
