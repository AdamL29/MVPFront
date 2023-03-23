<template>
    <v-container>
        <h1>Pins</h1>
        <div>
            <MapPage/>
        </div>
            <h3>Title:</h3>
                <v-text-field
                v-model="title"
                />
            <h3>Summary:</h3>
                <v-text-field
                v-model="summary"
                />
            <h3>Photo:</h3>
                <v-text-field
                v-model="photo"
                />
            <h3>Date:</h3>
                <v-text-field
                v-model="date"
                />
            <h3>Resource:</h3>
                <v-text-field
                v-model="resource"
                />
        <FooterBar/>
    </v-container>
</template>

<script>
import FooterBar from "../components/FooterBar.vue";
import MapPage from "../components/VueLeaflet.vue"
    export default {
        name: 'PinPage',
        components: {
            FooterBar,
            MapPage,
    },
    }
</script>

<style lang="scss" scoped>
.map{
    display: grid;
    // width: 30vw;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>