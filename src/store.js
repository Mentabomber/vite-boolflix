import { reactive } from 'vue'

export const store = reactive({
    selectedMovieId: "",
    apiURLSearchMovie: "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT&query=",
    apiURLSearchShows: "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT&query=",
    apiURLMultiSearch: "https://api.themoviedb.org/3/search/multi?api_key=e99307154c6dfb0b4750f6603256716d&include_adult=false&language=en-US&page=1&query=",
    apiActors: `https://api.themoviedb.org/3/movie/${selectedMovieId}/credits?api_key=e99307154c6dfb0b4750f6603256716d`,
    actorsList: [],
    flags: [
        {
            language: "it",
            flagImg: "it.webp"
        },
        {
            language: "pt",
            flagImg: "pt.webp"
        },
        {
            language: "es",
            flagImg: "sp.webp"
        },
        {
            language: "en",
            flagImg: "en.webp"
        }
     ],
    imgBaseLink: "https://image.tmdb.org/t/p/w342",
    movieList: [],
    showsList: [],
    searchText: "",
    movieTypes: [],
    countryFlag: []
},
// created(){
//     selectedMovieId: "",
// }
);