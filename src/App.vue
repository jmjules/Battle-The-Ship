<script setup>
import { ref } from "vue";
import Game from "./views/Game.vue";

const gameStatePlaying = ref(false)
</script>

<template>
  <header>
    <h1>Schiffe go blub blub</h1>
  </header>

  <main>
    <Game v-if="gameStatePlaying"/>
    <button v-if="!gameStatePlaying" @click="gameStatePlaying = true" >Play</button>
  </main>
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  main {
    display: grid;
    place-items: center;

    min-height: 50vh;
  }
</style>