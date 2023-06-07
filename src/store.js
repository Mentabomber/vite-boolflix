import { reactive } from 'vue'

export const store = reactive({
    apiURLSearchMovie: "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=",  
    movieList: [],
    searchText: "",
    movieTypes: [],
});