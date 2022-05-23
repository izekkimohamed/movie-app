import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export default function useDetailsData() {
  const { id, media_type } = useRouter().query;
  const [data, setData] = useState();
  useQuery(
    ["details", id, media_type],
    () =>
      axios
        .get(
          `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${key}&append_to_response=credits,videos,reviews,recommendations,external_ids`,
        )
        .then((res) => setData(res.data)),

    {
      retry: 1,
    },
  );
  return {
    data,
  };
}
