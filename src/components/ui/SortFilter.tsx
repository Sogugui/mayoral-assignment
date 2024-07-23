import React from 'react';
import { useRouter } from 'next/router';

type FilterParams = {
  query?: string;
  price?: string;
  sort?: string;
};
type Props = {
  sortWithoutQuery?: (e: string) => void;
};

const SortFilter = ({ sortWithoutQuery }: Props) => {
  const router = useRouter();

  const filterProducts = (filterParams: Partial<FilterParams>) => {
    const newQuery: FilterParams = { ...router.query, ...filterParams };
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (sortWithoutQuery) {
      sortWithoutQuery(e.target.value);
    } else {
      filterProducts({ sort: e.target.value });
    }
  };
  return (
    <div className=" flex justify-end border-gray-200 px-4 ">
      <div className="flex items-center justify-between">
        <div className="inline-block text-left">
          <div className=" w-40 rounded-md origin-top-left  bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none">
            <div className="py-1">
              <select
                onChange={sortHandler}
                className="block w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border-none focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortFilter;
