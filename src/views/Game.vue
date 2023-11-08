<template>
    <GameStatus/>

    <div class="boards-wrapper">
        <Board who="player" @turn="processPlayer" />
        <!-- {{ store }} -->
        <Board who="computer"/>
    </div>
</template>

<script setup>
import GameStatus from '@/components/GameStatus.vue';
import Board from '@/components/Board.vue';

import {store} from "../helpers/store.js"
import { generateNewBoard } from "../helpers/helperFunctions";

function processPlayer(cell) {
    store.addPlayerTile(cell)
    alert(`The player pressed cell ${cell}`)

}



store.player = generateNewBoard();
store.computer = generateNewBoard();

console.log(store);



</script>

<style scoped>
    .boards-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-evenly;

        text-align: center;
    }

    @media (min-width: 1000px) {
        .boards-wrapper {
            flex-direction: row;
        }
    }
</style>