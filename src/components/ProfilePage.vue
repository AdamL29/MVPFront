<template>
    <v-container>
        <h1>Profile</h1>
        <div class="miniMap">
            <mapPage/>
        </div>
        <FooterBar/>
    </v-container>
</template>

<script>
import FooterBar from "../components/FooterBar.vue";
import MapPage from "../components/VueLeaflet.vue"

    export default {
        name: 'ProfilePage',
        components: {
            FooterBar,
            MapPage,
        },
    }
</script>

<style lang="scss" scoped>
.miniMap{
    width: 20vw;
    height: 30vh;
    position: absolute;
    left: 5%;
    transform: translateX(-5%);
}
</style>