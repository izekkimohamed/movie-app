import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

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
