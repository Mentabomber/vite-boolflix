<script >

import { store } from '../store';
import AppSearch from './AppSearch.vue'

import axios from 'axios';

export default{
    name: "AppHeader",
    components: {
        AppSearch,
    },
    methods:{
        getMovies(){
            let myUrl = store.apiURLMultiSearch;

            myUrl += store.searchText;
            console.log(myUrl);
            axios.get(myUrl)
                .then((res)=>{
                    store.movieList = res.data
                    console.log(store.movieList);
                })
                .catch(err => {
                    console.log(err);
                })

        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h1>BOOLFLIX</h1>
            <AppSearch @search="getMovies"/>
        </div>
    </main>

</template>

<style lang="scss" scoped>
    main{
       
        width: 100%;
        background-color: black;
    }
    .container{
        padding: 20px;
        margin: auto;
        width: 1080px;
        display: flex;
        justify-content: space-between;
        h1{
        color: red;
        }
    }

</style>
