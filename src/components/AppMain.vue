<script >

import AppMovieCard from './AppMovieCard.vue'

export default{
    name: "AppMain",
    components: {
        AppMovieCard,
    }
}
</script>

<template>
  <main>
    <div class="cards-container">
      <AppMovieCard />
    </div>
  </main>

  
</template>

<style lang="scss" scoped>
main{
  background-color: rgb(67,67,67);
}
  .cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
  }

</style>
