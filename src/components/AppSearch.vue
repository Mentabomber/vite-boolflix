<script >

import { store } from '../store.js';


export default{
    name: "AppSearch",
    components: {
        
    },
    data(){
    return{
      store,
    }
  },
}
</script>

<template>
            <div id="container">
                <label for="search-movies">Search Movies</label>
                <input type="text" placeholder="Search Movies" v-model="store.searchText">
                <button @click="$emit('search')">Search</button>
            </div>    
</template>

<style lang="scss" scoped>
    #container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
