<template>
    <div class="cell" :class="{ ship: hasShip }" @click="$emit('cellClicked', cellId)">
        <!-- {{ cellId }} -->
        <!-- {{ y }}, {{ x }} -->

    </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { store } from "../helpers/store";

    const props = defineProps({
        cellId : Number,
        parentBoard: String
    })

    const { cellId, parentBoard } = toRefs(props);

    let index = cellId.value - 1
    let hasShip = false

    let where = parentBoard.value
    let x = index % 10
    let y = Math.trunc(index / 10)

    // console.log("cell store:", store);
    if (where == "player" && store.player[x][y] == "X") {
        hasShip = true
    }
    if (where == "computer" && store.computer[x][y] == "X") {
        hasShip = true
    }
</script>

<style scoped>
.cell {
    outline: 1px solid green;
    aspect-ratio: 1;
    width: 10%;

    display: grid;
    place-content: center;
}

.cell:hover {
    cursor: pointer;
    background: #333;
}

.ship {
    background: green;
}
</style>