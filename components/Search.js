import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useStore } from "../store/searchStore";

export default function SearchForm() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const { setSearchResults } = useStore((state) => state);

  const fetchSearch = useCallback(() => {
    debounce((text) => {
      if (text !== "") {
        setText(text);
        fetch(`/api/search?q=${text}`)
          .then((res) => res.json())
          .then((data) => {
            setSearchResults({
              movies: data.results,
              total_pages: data.total_pages,
              searchTerm: text,
              page: 1,
            });
          });
      }
    }, 1000);
  }, [setSearchResults]);

  function handleChange(event) {
    setSearch(event.target.value);
    fetchSearch(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/search?q=${search}`);
    setSearch("");
  }
  function debounce(func, delay = 1000) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
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
