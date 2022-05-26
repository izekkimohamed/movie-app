import axios from "axios";

export default function handler(req, res) {
  const { id, media } = req.query;

  const url = `https://api.themoviedb.org/3/${media}/${id}`;

  // fetch data with axios
  axios
    .get(url, {
      params: {
        api_key: process.env.NEXT_PRIVATE_TMDB_API_KEY,
        language: "en-US",
        append_to_response:
          "credits,videos,reviews,recommendations,external_ids",
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
