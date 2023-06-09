<script>

import { store } from '../store.js';

import axios from 'axios';

import AppStarRatingCreator from './AppStarRatingCreator.vue';


export default {
    name: "AppMovieCard",
    components: {
    AppStarRatingCreator
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
      
},
    convertVote(intVote) {
        let roundedUp = Math.ceil(intVote / 2)
        return roundedUp;
        
},
    getActors(movieId){
        store.selectedMovieId = movieId;
        let myUrl = store.apiActors;
        axios.get(myUrl)
        .then((res) => {
            store.getActorsList = res.data.cast.original_name;
            console.log(res.data);

        })
    }
}
};
</script>

<template>
    <!-- così facendo trovo solo la prima pagina, nel caso volessi trovare più pagine devo prendere fuori il numero di pagine trovate e usarlo in un for per ciclare tutti i film nelle pagine trovate -->
    <!-- <h2>MOVIES</h2> -->
    <div class="container" v-for="movie in store.movieList.results" @click="logCard">
        <div class="card-poster">
            <img class="poster" :src="store.imgBaseLink + movie.poster_path" alt="">
        </div>
        <div class="card-description">
            <span style="display: block;" >Titolo: {{ movie.title || movie.name }}</span>
            <span style="display: block;">Titolo Originale: {{ movie.original_title || movie.original_name }}</span>
            <span style="display: block;">Lingua: <img class="flags" :src="getFlagEmoji(movie.original_language)" alt="img_non_disponibile"></span>
            <div style="padding-bottom: 10px;">
                <span>Voto: <AppStarRatingCreator v-for="i in 5" :indice=i :finalVote="convertVote(movie.vote_average)"/></span>
            </div>
            <span>Attori: {{ getActors(movie.id) }}</span>
            <span>Overview: {{ movie.overview }} </span>
            <!-- <span>Overview: {{ movie.overview }} </span> -->
        </div>
    </div>

    <!-- esperimenti per creare sezione film e serie separate

    <h2>TV SERIES</h2>
    <div class="container" v-for="show in store.showsList.results">
        
        <span>Titolo: {{ show.name }}</span>
        <span>Titolo Originale: {{ show.original_name }}</span>
        <span>Lingua: {{ getFlagEmoji(show.original_language) }}</span>
        <span>Voto: {{ show.vote_average }}</span>
        
    </div> -->

</template>

<style lang="scss" scoped>
.poster{
    width: 100%;
    height: 100%;
}
.card-description {
        height: 100%;
        display: none;
        overflow-y: auto;
        text-align: start;
        span {
            padding-bottom: 10px;
            font-size: 20px;
        }
    }   
.container:hover{
    .card-poster{
        display: none;}
    .card-description {
        display: block;
    }   
}
.container {
        width: calc(100% / 5 - 44px);
        
        min-height: calc(100% / 5 - 44px);
        height: 600px;
        padding: 20px;
        margin: 20px;
        text-align: center;
        background-color: black;
        color: white;
        border: 1px solid white;
        .card-poster{
            width: 100%;
            height: 100%;
        }
        .flags{
            width: 20px;
            height: 15px;
        }

    }
</style>
