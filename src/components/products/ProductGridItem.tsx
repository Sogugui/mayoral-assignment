import { Product } from "../../interfaces/product";
import Image from "next/image";
import { useState } from "react";

interface ProductGridItemProps {
  product: Product;
}

const ProductGridItem = ({ product }: ProductGridItemProps) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  return (
    <div className="border shadow-lg border-lightBlue rounded-lg flex flex-col items-center h-full p-4 overflow-hidden">
      <Image
        src={`/products/${displayImage}`}
        alt={product.name}
        className="w-full object-cover"
        width={500}
        height={500}
        onMouseEnter={() => setDisplayImage(product.images[1])}
        onMouseLeave={() => setDisplayImage(product.images[0])}
      /> 
      <h2 className=" text-md mt-4 text-center font-normal mb-10 truncate w-full max-w-[250px]">
        {product.name}
      </h2>
      <div className="flex flex-col items-center mb-4">
        {product.discountPrice ? (
          <>
            <p className="text-gray-500 line-through">{product.price}</p>
            <p className="text-red-500">
              {product.discountPrice} (-{product.discountPercentage}%)
            </p>
          </>
        ) : (
          <p className="text-gray-500">{product.price}</p>
        )}
      </div>
      {product.moreColors && (
        <p className="text-basicGray font-semibold text-sm mb-4">más colores</p>
      )}
      <div className="mt-auto">
        <button className="bg-lightBlue text-white py-1 px-3 rounded-[5px] text-sm ">
          AÑADIR
        </button>
      </div>
    </div>
  );
};

export default ProductGridItem;
