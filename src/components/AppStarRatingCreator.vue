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
<!-- prima idea -->
<div v-if="finalVote === 0">
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</div>
<div v-else-if="finalVote === 1">
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</div>

<div v-else-if="finalVote === 2">
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</div>

<div v-else-if="finalVote === 3">
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</div>

<div v-else-if="finalVote === 4">
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</div>

<div v-else-if="finalVote === 5">
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
</div>


<!-- seconda idea 
<div v-if="finalVote === 0">
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</div>

<div v-else-if="finalVote === 1">
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</div> -->

</template>

<style lang="scss" scoped>
    img{
        width: 15px;
        height: 15px;

    }
</style>
