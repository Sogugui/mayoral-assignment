import { useContext } from 'react';
import { ImPlus, ImMinus } from 'react-icons/im';
import SearchForm from './SearchForm';
import { AppContext } from 'store/Provider';

const TopMenu = () => {
  const { transformGrid } = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 mx-auto p-4">
        <div className="flex flex-col sm:flex-row-reverse w-full sm:justify-between items-center">
          <div className="flex flex-row mb-2 sm:mb-0 sm:mr-2 items-center justify-center">
            <button
              className="p-2 mx-1 text-3xl text-lightGray sm:mb-0"
              onClick={() => transformGrid('decrement')}
            >
              <ImMinus />
            </button>
            <button
              className="p-2 mx-1 text-3xl text-customGray sm:mb-0"
              onClick={() => transformGrid('increment')}
            >
              <ImPlus />
            </button>
          </div>
          <SearchForm />
        </div>
      </div>
      <div className="block sm:hidden border-b-2 p-x-9 border-gray-300 mb-4"></div>
    </>
  );
};

export default TopMenu;
