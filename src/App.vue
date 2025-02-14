<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4 text-center text-xl font-bold">
      🎵 Radio Browser 🎵
    </header>

    <!-- Barra de Pesquisa -->
    <SearchBar @search="fetchRadios" />

    <!-- Lista de Rádios -->
    <div class="container mx-auto p-4">
      <RadioList :radios="radios" @play="playRadio" @stop="stopRadio" @addToFavorites="addToFavorites" />
    </div>

    <!-- Minhas Rádios Favoritas -->
    <div class="container mx-auto p-4">
      <h2 class="text-xl font-semibold">Minhas Favoritas</h2>
      <RadioList :radios="favorites" @play="playRadio" @stop="stopRadio" @remove="removeFavorite" />
    </div>

    <!-- Player de Áudio -->
    <PlayerControls ref="player" :currentRadio="currentRadio" />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import RadioList from "./components/RadioList.vue";
import PlayerControls from "@/components/PLayerControls.vue"; // Ajustei o caminho para garantir que seja local

import { fetchRadios } from "../services/radioService"; // Ajustei o caminho para garantir que funcione com Vite

export default {
  components: {
    SearchBar,
    RadioList,
    PlayerControls,
  },
  data() {
    return {
      radios: [], // Lista de rádios da API
      favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Carregar rádios favoritas do LocalStorage
      currentRadio: null,
    };
  },
  methods: {
    // Buscar rádios da API
    async fetchRadios(query = "") {
      this.radios = await fetchRadios(query);
    },

    // Reproduzir rádio
    playRadio(url, radio) {
      this.currentRadio = radio;
      this.$refs.player.play(url);
    },

    // Parar rádio
    stopRadio() {
      this.$refs.player.stop();
    },

    // Adicionar rádio aos favoritos
    addToFavorites(radio) {
      if (!this.favorites.some((r) => r.stationuuid === radio.stationuuid)) {
        this.favorites.push(radio);
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      }
    },

    // Remover rádio dos favoritos
    removeFavorite(radio) {
      this.favorites = this.favorites.filter((r) => r.stationuuid !== radio.stationuuid);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
  mounted() {
    this.fetchRadios(); // Buscar rádios ao iniciar a aplicação
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
