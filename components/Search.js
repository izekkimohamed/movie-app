import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useDebounce from "../hooks/useDdebounce";
import useSearch from "../hooks/useSerachData";
import { useStore } from "./Navbar";

export default function SearchForm() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [displayList, setDisplayList] = useState(false);
  const { closeMenu } = useStore((state) => state);
  const debouncedSearch = useDebounce(search, 1000);
  const { data, isLoading, isError } = useSearch(debouncedSearch);

  function handleChange(event) {
    setSearch(event.target.value);
    setDisplayList(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    closeMenu();
    router.push(`/search?q=${search}`);
    setSearch("");
    setDisplayList(false);
  }
  function handleClick(id, media_type) {
    setSearch("");
    setDisplayList(false);
    router.push(`/details/${id}?media_type=${media_type}`);
  }
  return (
    <>
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
        {data && displayList && (
          <ul className="search-list">
            {data.movies
              .filter((_, i) => i < 5)
              .map((movie) => (
                <li key={movie.id}>
                  <Link
                    href={`/details/${movie.id}?media_type=${movie.media_type}`}
                    passHref>
                    <a
                      onClick={() => handleClick(movie.id, movie.media_type)}
                      className="search-list-item">
                      <div className="img-container">
                        <Image
                          src={
                            movie.poster_path !== null
                              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                              : "/placeholder.png"
                          }
                          alt={movie.title || movie.name}
                          title={movie.title || movie.name}
                          layout="fill"
                        />
                      </div>
                      <div className="details">
                        <p>{movie.title || movie.name}</p>
                        <p>{movie.release_date || movie.first_air_date}</p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            <li className="see-all">
              <Link href={`/search?q=${search}`} passHref>
                <a onClick={handleSubmit} className="search-list-item">
                  See all
                </a>
              </Link>
            </li>
          </ul>
        )}
      </form>
    </>
  );
}
