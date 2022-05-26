import axios from "axios";

export async function getData(url, page) {
  const { data } = await axios.get(url, {
    params: {
      api_key: process.env.NEXT_PRAVITE_TMDB_API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return data;
}

export async function getDetails(id, media) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}`,
  );

  return data;
}
