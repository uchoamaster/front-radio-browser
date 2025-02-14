<template>
  <div class="flex justify-center p-4">
    <input
      type="text"
      v-model="searchQuery"
      @input="$emit('search', searchQuery)"
      placeholder="Buscar rádios..."
      class="p-2 border rounded-md w-1/2"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>
