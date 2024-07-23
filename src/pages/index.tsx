import { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { initialData } from 'seed/seed';
import TopMenu from 'components/ui/TopMenu';
import ProductGrid from 'components/products/ProductGrid';
import SortFilter from '@components/ui/SortFilter';
import { Product } from 'interfaces/product';

const HomePage: NextPage = () => {
  const [sortedProducts, setSortedProducts] = useState<Product[]>(initialData.mayoralProducts);

  const sortProductsByPrice = useCallback(
    (filter: string) => {
      const productsCopy = [...sortedProducts];
      let filteredProducts: Product[];

      if (filter === 'lowest') {
        filteredProducts = productsCopy.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('€', '').replace(',', '.'));
          const priceB = parseFloat(b.price.replace('€', '').replace(',', '.'));
          return priceA - priceB;
        });
      } else if (filter === 'highest') {
        filteredProducts = productsCopy.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('€', '').replace(',', '.'));
          const priceB = parseFloat(b.price.replace('€', '').replace(',', '.'));
          return priceB - priceA;
        });
      } else if (filter === 'featured') {
        filteredProducts = productsCopy;
      } else {
        throw new Error("Invalid order parameter. Use 'lowest', 'highest', or 'featured'.");
      }

      setSortedProducts(filteredProducts);
    },
    [sortedProducts],
  );
  return (
    <main>
      <div className="container mx-auto p-4">
        <TopMenu />
        <SortFilter sortWithoutQuery={sortProductsByPrice} />
        <ProductGrid products={sortedProducts} />
      </div>
    </main>
  );
};

export default HomePage;
