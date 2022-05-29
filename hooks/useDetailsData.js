import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export default function useDetailsData() {
  const { id, media_type } = useRouter().query;

  return useQuery(
    ["details", id, media_type],
    () =>
      axios
        .get(`/api/details?media=${media_type}&id=${id}`)
        .then((res) => res.data),

    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );
}
