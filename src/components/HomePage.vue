<template>
  <v-container>
    <h1>Welcome</h1>
    <MapTest3/>
  </v-container>
</template>

<script>
import MapTest3 from "../components/VueLeaflet.vue";
  export default {
    name: 'HomePage',
    components: {
      MapTest3,
    },
  }
</script>

<style lang="scss" scoped>

</style>