import { FC, useContext } from 'react';
import { Product } from 'interfaces';
import ProductGridItem from './ProductGridItem';
import { AppContext } from 'store/Provider';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  const { gridCols } = useContext(AppContext);

  return (
    <div
      className={`grid
     ${gridCols.mobile} 
      ${gridCols.lg} 
      gap-5 mb-10  mx-auto p-4`}
    >
      {products.map((product, index) => (
        <ProductGridItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
