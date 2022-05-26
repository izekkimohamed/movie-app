import axios from "axios";

export default function handler(req, res) {
  const page = req.query.page || 1;
  const type = req.query.type || "popular";
  const url = `https://api.themoviedb.org/3/movie/${type}`;

  // fetch data with axios
  axios
    .get(url, {
      params: {
        api_key: process.env.NEXT_PRIVATE_TMDB_API_KEY,
        language: "en-US",
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
