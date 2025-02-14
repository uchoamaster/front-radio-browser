<template>
  <div class="fixed bottom-0 w-full bg-gray-800 text-white p-4">
    <p v-if="currentRadio">{{ currentRadio.name }}</p>
    <audio ref="audioPlayer" controls></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRadio: null,
    };
  },
  methods: {
    play(url) {
      this.$refs.audioPlayer.src = url;
      this.$refs.audioPlayer.play();
    },
    stop() {
      this.$refs.audioPlayer.pause();
    },
  },
};
</script>
