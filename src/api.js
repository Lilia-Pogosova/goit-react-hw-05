import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGUyZmVhMWVmZmU1NWFiZjI0NDBlODBhODQwYmZkZCIsIm5iZiI6MTcyNDY3NjQ0Ni44MzY2NjUsInN1YiI6IjY2Y2M3NmE3YTU0NTU4YmMwMjZlYjNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSnh64zKkIwuEXuTQtbI4a9CV5UkE63FEG9RUSOpGzk`;
axios.defaults.headers.common["Accept"] = "application/json";

export const getTrendingMovies = async () => {
    const response = await axios.get("/trending/movie/day", {
        params: {
            language: "en-US",
        },
    });
    return response.data;
};

export const getMovieById = async (movie_id) => {
    const response = await axios.get(`/movie/${movie_id}`);
    return response.data;
};

export const getMovies = async (searchQuery) => {
    const response = await axios.get("/search/movie", {
        params: {
            query: searchQuery,
        },
    });
    return response.data;
};

export const getCastById = async (movie_id) => {
    const response = await axios.get(`/movie/${movie_id}/credits`);
    return response.data;
};

export const getReviewsById = async (movie_id) => {
    const response = await axios.get(`/movie/${movie_id}/reviews`, {
        params: {
            language: "en-US",
            page: "1",
        },
    });
    return response.data;
};

export const defaultImg =
    "https://www.petsworld.in/blog/wp-content/uploads/2014/09/cat.jpg";