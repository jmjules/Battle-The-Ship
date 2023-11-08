import { reactive } from "vue"

export const store = reactive({
    player: [],
    computer: [],
    addPlayerTile(playerTile) {
        this.player.push(playerTile)
    }
})