import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PaginationStyles } from "../styles/PaginationStyles";

function Pagination({ media }) {
  const page = useRouter().query.page;
  const pageNum = page ? parseInt(page) : 1;

  const paginationList = [];

  if (+pageNum < 4) {
    paginationList.push(1, 2, 3, 4, 5);
  } else {
    paginationList.push(
      pageNum - 2,
      pageNum - 1,
      pageNum,
      pageNum + 1,
      pageNum + 2,
    );
  }

  return (
    <PaginationStyles>
      {pageNum > 1 && (
        <li>
          <Link href={{ pathname: `${media}`, query: { page: pageNum - 1 } }}>
            <a>&lt;</a>
          </Link>
        </li>
      )}
      {paginationList.map((num) => (
        <li key={num}>
          <Link href={{ pathname: `${media}`, query: { page: num } }} passHref>
            <a className={pageNum === num ? "active" : ""}>{num}</a>
          </Link>
        </li>
      ))}
      <li>
        <Link
          href={{ pathname: `${media}`, query: { page: pageNum + 1 } }}
          passHref>
          <a>&gt;</a>
        </Link>
      </li>
    </PaginationStyles>
  );
}

export default Pagination;
