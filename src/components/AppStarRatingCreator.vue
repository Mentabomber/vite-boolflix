<script >



export default{
    name: "AppStarRatingCreator",
    components: {
        
    },
    props:{
        finalVote: Number
    },
    created(){
        console.log(this.finalVote);
    },

}
</script>

<template>
<div v-if="this.finalVote === 0">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
</div>
<div v-else-if="this.finalVote === 1">
    <img src="star-solid" alt="">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
</div>

<div v-else-if="this.finalVote === 2">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
</div>

<div v-else-if="this.finalVote === 3">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
    <img src="star-regular" alt="">
    <img src="star-regular" alt="">
</div>

<div v-else-if="this.finalVote === 4">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
    <img src="star-regular" alt="">
</div>

<div v-else-if="this.finalVote === 5">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
    <img src="star-solid" alt="">
</div>


</template>

<style lang="scss" scoped>

</style>
