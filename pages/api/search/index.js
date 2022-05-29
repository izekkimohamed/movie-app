import axios from "axios";

export default function handler(req, res) {
  const { q } = req.query;
  const page = req.query.page || 1;
  const url = `https://api.themoviedb.org/3/search/multi`;

  axios
    .get(url, {
      params: {
        api_key: process.env.NEXT_PRIVATE_TMDB_API_KEY,
        language: "en-US",
        query: q,
        page: page,
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
