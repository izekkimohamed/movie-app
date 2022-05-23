//movies urls
export const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}&language=en-US`;
export const trendingMovies = `
https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}&language=en-US`;
export const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}&language=en-US`;
export const onTheAirMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}&language=en-US`;
export const playingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}&language=en-US`;

//tvshows urls
export const popularTv = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}&language=en-US`;

export const airingToday = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}&language=en-US`;

export const topRatedTv = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}&language=en-US`;

export const onTheAirTv = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PRIVATE_TMDB_API_KEY}&language=en-US`;
