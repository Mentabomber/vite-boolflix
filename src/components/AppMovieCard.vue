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
},
methods: {
    getFlagEmoji(countryCode) {
        let flagSelected;
        const movieLanguage = countryCode
        // .toUpperCase()
        store.flags.forEach(flag => {
            console.log(flag,flag.language,movieLanguage);

            if(movieLanguage === flag.language){
            return flagSelected = flag.flagImg;
        }
        });
        return flagSelected;
      
}
}
};
</script>

<template>
    <!-- così facendo trovo solo la prima pagina, nel caso volessi trovare più pagine devo prendere fuori il numero di pagine trovate e usarlo in un for per ciclare tutti i film nelle pagine trovate -->
    <!-- <h2>MOVIES</h2> -->
    <div class="container" v-for="movie in store.movieList.results">
        <span> poster</span>
        <span>Titolo: {{ movie.title || movie.name }}</span>
        <span>Titolo Originale: {{ movie.original_title || movie.original_name }}</span>
        <span>Lingua: <img :src="getFlagEmoji(movie.original_language)" alt=""></span>
        <span>Voto: {{ movie.vote_average }}</span>
        
    </div>

    <!-- esperimenti per creare sezione film e serie separate

    <h2>TV SERIES</h2>
    <div class="container" v-for="show in store.showsList.results">
        
        <span>Titolo: {{ show.name }}</span>
        <span>Titolo Originale: {{ show.original_name }}</span>
        <span>Lingua: {{ getFlagEmoji(show.original_language) }}</span>
        <span>Voto: {{ show.vote_average }}</span>
        
    </div> -->
    <pre>{{ store.showsList }}</pre>
</template>

<style lang="scss" scoped>
    .container {
        width: calc(100% / 5 - 44px);
        padding: 20px;
        margin: 20px;
        text-align: center;
        background-color: black;
        color: white;
        img{
            width: 20px;
            height: 20px;
        }
        span{
            display: block;
        }
    }
</style>
