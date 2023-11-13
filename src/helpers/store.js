import { reactive } from "vue"

export const store = reactive({
    player: [],
    playerScore: 0,
    computer: [],
    compTargets: [],
    addPlayerTile(playerTile) {
        this.player.push(playerTile)
    },
    incrementPlayerScore() {
        this.playerScore++
    }
})