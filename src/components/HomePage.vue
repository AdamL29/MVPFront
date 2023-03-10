<template>
  <v-container>
    <h1>Welcome</h1>
    <MapTile/>
  </v-container>
</template>

<script>
import MapTile from "../components/Map.vue";
  export default {
    name: 'HomePage',
    components: {
      MapTile,
    },
  }
</script>

<style lang="scss" scoped>

</style>