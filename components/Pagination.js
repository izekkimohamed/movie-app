import Link from "next/link";
import { useRouter } from "next/router";
import { PaginationStyles } from "../styles/PaginationStyles";

export default function Pagination({ media, q, totalPages }) {
  const page = useRouter().query.page;
  const pageNum = page ? parseInt(page) : 1;

  const paginationList = [];

  const newArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (+pageNum < 4) {
    newArray.slice(0, 5).forEach((num) => {
      paginationList.push(num);
    });
  } else {
    newArray.slice(pageNum - 3, pageNum + 2).forEach((num) => {
      paginationList.push(num);
    });
  }

  return (
    <PaginationStyles>
      {pageNum > 1 && (
        <li>
          <Link
            href={{ pathname: `${media}`, query: { page: pageNum - 1, q: q } }}>
            <a>&lt;</a>
          </Link>
        </li>
      )}
      {paginationList.map((num) => (
        <li key={num}>
          <Link
            href={{ pathname: `${media}`, query: { page: num, q: q } }}
            passHref>
            <a className={pageNum === num ? "active" : ""}>{num}</a>
          </Link>
        </li>
      ))}
      <li>
        {pageNum < totalPages && (
          <Link
            href={{ pathname: `${media}`, query: { page: pageNum + 1, q: q } }}
            passHref>
            <a>&gt;</a>
          </Link>
        )}
      </li>
    </PaginationStyles>
  );
}
