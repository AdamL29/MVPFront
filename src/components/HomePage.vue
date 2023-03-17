<template>
  <v-container>
    <h1 class="welcome" >Welcome To Seek-N-Peek</h1>
    <MapPage/>
    <FooterBar/>
  </v-container>
</template>

<script>
import MapPage from "../components/VueLeaflet.vue";
import FooterBar from "../components/FooterBar.vue";
  export default {
    name: 'HomePage',
    components: {
      MapPage,
      FooterBar
    },
  }
</script>

<style lang="scss" scoped>
.welcome{
  display: grid;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>