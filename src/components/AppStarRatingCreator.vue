<script >



export default{
    starAssignment: false,
    name: "AppStarRatingCreator",
    components: {
        
    },
    props:{
        finalVote: Number,
        indice: Number
    },
    methods: {
        voteCounter(){
            this.starAssignment = false;
            if (this.finalVote !== 0) {
                for (let index = this.indice; index <= this.finalVote; index++) {
                    this.starAssignment = true;
                    
                }
            }
        }
    },
    created(){
        console.log(this.finalVote);
        this.voteCounter();
    },

}
</script>

<template>
<!-- prima idea
<div v-if="starAssignment === 0">
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
</div> -->


<!-- seconda idea 
<div v-if="finalVote === 0">
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</div>

<div v-else-if="finalVote === 1">
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</div> -->

<!-- terza idea -->
<span v-if="starAssignment">
    <i class="fa-solid fa-star" style="color: #fbdf2d;"></i>
</span>

<span v-else>
    <i class="fa-regular fa-star" style="color: #fbdf2d;"></i>
</span>
</template>

<style lang="scss" scoped>
    img{
        width: 15px;
        height: 15px;

    }
</style>
