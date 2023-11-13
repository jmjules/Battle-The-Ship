<template>
    <!-- <GameStatus/> -->

    <div class="boards-wrapper">
        your score {{ store.playerScore }}/21
        <Board who="player" />
        <!-- {{ store }} -->
        <Board who="computer"  @turn="processPlayerTurn" />
    </div>
</template>

<script setup>
import GameStatus from '@/components/GameStatus.vue';
import Board from '@/components/Board.vue';

import {store} from "../helpers/store.js"
import { generateNewBoard, compTurn, attackPlayerCell } from "../helpers/helperFunctions";

function processPlayerTurn(cell) {
    let x = cell[0]
    let y = cell[1]
    // store.addPlayerTile(cell)
    // alert(`The player pressed cell ${cell}`)
    if (store.computer[x][y] === "X") {
        store.incrementPlayerScore()
    }
    // console.log(store);
    // console.log(store.player);
    let compChoice
    let testValue
    
    let freeCell = false
    while (freeCell === false) {
        compChoice = compTurn();
        testValue = compChoice[0] * 10 + compChoice[1];
        console.log("trying", testValue);

        // console.log(store.compTargets.includes(testValue));
        if ( store.compTargets.includes(testValue) === false) {
            freeCell = true
            // console.log("not duplicate");
        }
    }
    store.compTargets.push(testValue);
    console.log(store.compTargets);

    attackPlayerCell(...compChoice)
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