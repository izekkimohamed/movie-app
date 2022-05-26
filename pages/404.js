import Link from "next/link";
import React from "react";

function notFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">
        <a>Go to home</a>
      </Link>
    </div>
  );
}

export default notFound;
