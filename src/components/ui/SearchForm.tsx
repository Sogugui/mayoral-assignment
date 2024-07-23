import { useCallback, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { ImCross } from 'react-icons/im';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`/search?searchQuery=${searchTerm}`);
    },
    [searchTerm, router],
  );

  const handleOnClean = useCallback(() => {
    setSearchTerm('');
    if (router.pathname !== '/') {
      router.push(`/`);
    }
  }, [router]);

  return (
    <div className="relative flex-1 ">
      <form onSubmit={submitHandler}>
        <div className="relative sm:w-[50%]">
          <IoSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 font-semibold text-gray-400 h-6 w-6" />
          <button type="button" onClick={handleOnClean}>
            <ImCross className="h-4 w-4 absolute top-1/2 -translate-y-1/2 right-3  text-gray-400" />
          </button>
          <input
            onChange={handleSearchChange}
            placeholder="Buscar"
            type="text"
            value={searchTerm}
            className="border-4 rounded-xl focus:border-customGray p-2 pl-8  w-full "
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
