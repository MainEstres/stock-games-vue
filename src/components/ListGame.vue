<script setup>
import { useGameStore } from '../stores/dataGame.js';
import { storeToRefs } from 'pinia';

const gameStore = useGameStore();


const { games } = storeToRefs(gameStore);

const { increase, decrease } = gameStore

</script>

<template>
    <div class="container">
        <h1 class="m-4 text-center">La maravillora tienda owo</h1>
        <h2 class="m-4 text-center">Stock de juegos</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(game, index) in games">

                    <td>{{ game.codigo }}</td>
                    <td>{{ game.nombre }}</td>
                    <td>{{ game.stock }} und</td>
                    <td>$ {{ game.precio }}</td>
                    <td>
                        <button @click="increase(index)">+</button>
                        <button @click="decrease(index)">-</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>