import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useDebounce from "../hooks/useDdebounce";
import useSearch from "../hooks/useSerachData";

export default function SearchForm() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, isError } = useSearch(debouncedSearch);

  function handleChange(event) {
    setSearch(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/search?q=${search}`);
    setSearch("");
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label htmlFor="search">
        <FaSearch />
      </label>
      <input
        type="text"
        placeholder="Search"
        id="search"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}

/*

function debounce(func, delay = 1000) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }


  const fetchSearch = useCallback(() => {
    debounce((text) => {
      if (text !== "") {
       
      
      }
    }, 1000);
  }, []);


*/
