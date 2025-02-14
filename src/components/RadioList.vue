<template>
  <div>
    <div v-for="radio in radios" :key="radio.stationuuid" class="border p-4 m-2 rounded">
      <img :src="radio.favicon" class="h-12 w-12" alt="Radio Logo" />
      <h2 class="font-bold">{{ radio.name }}</h2>
      <button @click="$emit('play', radio.url)">▶️ Play</button>
      <button @click="$emit('stop')">⏹️ Stop</button>
      <button @click="$emit('addToFavorites', radio)">⭐ Salvar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["radios"],
};
</script>
