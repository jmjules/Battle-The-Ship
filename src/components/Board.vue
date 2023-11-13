<template>
    <div class="board-wrapper">
        <h2>{{ who }}</h2>
        <div class="board">
            <Cell v-for="index in 100" :key="index" :cell-id="index" :id="who + index" :parentBoard="who" @cellClicked="processClick" />
        </div>
    </div>

</template>

<script setup>
import Cell from "@/components/Cell.vue"

const props = defineProps({
    who: String
})

const emit = defineEmits(["turn"])

function processClick( cell ) {
    // if( props.who === "computer") {
    //     console.log("im a computer");
    //     emit("turn", cell)
    //     console.log("after");
    // }
    emit("turn", cell)
}

</script>

<style scoped>

.board {
    margin: 0 auto;

    width: 40vw;
    outline: 1px solid orangered;

    display: flex;
    flex-wrap: wrap;
}

@media (max-width: 700px) {
    .board {
        width: 70vw;
    }
}
</style>