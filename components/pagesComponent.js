import { useEffect, useState } from "react";
import { PagesContainerStyles } from "/styles/PagesContainerStyles";
import CardsList from "./CardsList";

function PagesContainer({ section, movies, page, setPage }) {
  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    if (page === 1) return;
    setPage(page - 1);
  }
  function goToPage(num) {
    setPage(+num);
  }

  // rander list of pagination condditonally based on the page number
  // pagination list should have 5 items max amd next and prev button should be disabled if page is 1 or last page

  // get two num before and after current page
  function getPages(num) {
    const arr = new Array();
    if (num === 1) {
      arr.push(num);
      arr.push(num + 1);
      arr.push(num + 2);
      arr.push(num + 3);
      arr.push(num + 4);
    } else if (num === 2) {
      arr.push(num - 1);
      arr.push(num);
      arr.push(num + 1);
      arr.push(num + 2);
      arr.push(num + 3);
    } else if (num === 3) {
      arr.push(num - 2);
      arr.push(num - 1);
      arr.push(num);
      arr.push(num + 1);
      arr.push(num + 2);
    } else {
      arr.push(num - 2);
      arr.push(num - 1);
      arr.push(num);
      arr.push(num + 1);
      arr.push(num + 2);
    }
    return arr;
  }
  const pagination = getPages(page);
  useEffect(() => {
    console.log(getPages(page));
  }, [page]);

  return (
    <PagesContainerStyles>
      <h3>{section} </h3>
      <ul>
        <li>
          <button onClick={prevPage} disabled={page === 1}>
            Prev
          </button>
        </li>
        {pagination.map((num) => (
          <li key={num}>
            <button onClick={() => goToPage(num)}>{num}</button>
          </li>
        ))}
        <li>
          <button onClick={nextPage}>Next</button>
        </li>
      </ul>
      <CardsList movies={movies} />
    </PagesContainerStyles>
  );
}

export default PagesContainer;
