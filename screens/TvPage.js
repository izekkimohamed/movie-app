import { useState } from "react";
import PagesContainer from "../components/pagesComponent";
import useTvData from "../hooks/useTvData";

function TvPage() {
  const { data, isLoading, isError } = useTvData();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return <PagesContainer section="Popular Tv Shows" movies={data} media="tv" />;
}

export default TvPage;
