<template>
  <v-container>
    <h1 id="welcome" >Welcome To Seek-N-Peek</h1>
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
#welcome{
  display: grid;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>