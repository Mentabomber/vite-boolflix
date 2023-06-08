import { reactive } from 'vue'

export const store = reactive({
    apiURLSearchMovie: "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT&query=",
    apiURLSearchShows: "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT&query=",
    apiURLMultiSearch: "https://api.themoviedb.org/3/search/multi?api_key=e99307154c6dfb0b4750f6603256716d&include_adult=false&language=en-US&page=1&query=",
    flags: [
        {
            language: "it",
            flagImg: "../assets/it.svg"
        },
        {
            language: "pt",
            flagImg: "../assets/pt.svg"
        },
        {
            language: "es",
            flagImg: "../es.svg"
        },
        {
            language: "en",
            flagImg: "../assets/en.svg"
        }
     ],
    movieList: [],
    showsList: [],
    searchText: "",
    movieTypes: [],
    countryFlag: []
});