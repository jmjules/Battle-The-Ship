<template>
    <div class="cell" 
        :class="{ ship: hasShip, cship: clickedShip == 'ship', cempty: clickedShip == 'water' }" 
        @click.once="processCellClick">
        <!-- {{ cellId }} -->
        <!-- {{ y }}, {{ x }} -->
        <!-- <div v-if="where == 'computer'">{{ compHasShip }}</div> -->
    </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import { store } from "../helpers/store";

    const props = defineProps({
        cellId : Number,
        parentBoard: String
    })

    const emit = defineEmits(["cellClicked"])

    const { cellId, parentBoard } = toRefs(props);

    let index = cellId.value - 1
    let hasShip = false
    let compHasShip = false
    const clickedShip = ref(null)

    let where = parentBoard.value
    let x = index % 10
    let y = Math.trunc(index / 10)

    // console.log("cell store:", store);
    if (where == "player" && store.player[x][y] == "X") {
        hasShip = true
    }
    if (where == "computer" && store.computer[x][y] == "X") {
        compHasShip = true
    }

    function processCellClick() {
        if (props.parentBoard == "computer") {
            
            
            emit('cellClicked', [x, y])
            
            clickedShip.value = compHasShip ? "ship" : "water"
        }
    }

    function processCompAttack() {
        if (props.parentBoard == "player") {
            
        }
    }

</script>

<style scoped>
.cell {
    aspect-ratio: 1;
    width: 10%;
    outline: 1px solid #034007;
    background-color: rgb(26, 39, 56);

    display: grid;
    place-content: center;
}



@media (hover: hover) {
    .cell:hover {
        cursor: pointer;
        /* background: #333; */
        filter: brightness(1.2);
        transform: scale(1.2);
    }
}

.ship, .cship {
    background: #034007;
}
.cempty {
    background: #2d1024;
}

.mehit {
    background: brown;
}

.ship.mehit {
    position: relative;
    background: orange;
}
.ship.mehit::before {
    content: "x";
    color: black;
}
</style>