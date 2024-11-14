import { defineStore } from "pinia";
import { ref } from "vue";
import dataGame from '../data/juegos.json'

export const useGameStore = defineStore("games", () => {

    const games = ref(dataGame);

    const increase = (index) => {
        games.value[index].stock++;
    }

    const decrease = (index) => {
        if (games.value[index].stock > 0) {
            games.value[index].stock--;
        }
    }

    return { games, increase, decrease }
})