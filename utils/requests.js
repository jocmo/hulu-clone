const API_KEY = "435f61ef668b9d39dd1f9b36282c520c"


const requests = {

    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchDocumentaries: {
        title: 'Documentaries',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    fetchAnimes: {
        title: 'Animes',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=16`
    },
};

//https://api.themoviedb.org/3/trending/all/week?api_key=435f61ef668b9d39dd1f9b36282c520c&language=en-US

//https://api.themoviedb.org/3/discover/movie?api_key=435f61ef668b9d39dd1f9b36282c520c&with_genres=28

export default requests;