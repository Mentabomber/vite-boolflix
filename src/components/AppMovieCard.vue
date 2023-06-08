<script>

import { store } from '../store.js';

export default {
  components: {
    name: "AppMovieCard",
  },
  data(){
    return{
      store,
    }
}
};
</script>

<template>
    <!-- così facendo trovo solo la prima pagina, nel caso volessi trovare più pagine devo prendere fuori il numero di pagine trovate e usarlo in un for per ciclare tutti i film nelle pagine trovate -->
    <div class="container" v-for="movie in store.movieList.results">
        
        <span>Titolo: {{ movie.title }}</span>
        <span>Titolo Originale: {{ movie.original_title }}</span>
        <span>Lingua: {{ movie.original_language }}</span>
        <span>Voto: {{ movie.vote_average }}</span>
        
    </div>
    <pre>{{ store.movieList }}</pre>
</template>

<style lang="scss" scoped>
    .container {
        width: calc(100% / 5 - 44px);
        padding: 20px;
        margin: 20px;
        text-align: center;
        background-color: black;
        color: white;
        span{
            display: block;
        }
    }
</style>
