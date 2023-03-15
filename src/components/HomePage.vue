<template>
  <v-container>
    <h1 id="welcome" >Welcome To Seek-N-Peek</h1>
    <MapPage/>
  </v-container>
</template>

<script>
import MapPage from "../components/VueLeaflet.vue";
  export default {
    name: 'HomePage',
    components: {
      MapPage,
    },
  }
</script>

<style lang="scss" scoped>
#welcome{
  display: grid;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>