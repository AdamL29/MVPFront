<template>
    <v-container>
        <h1>Profile</h1>
        <FooterBar/>
    </v-container>
</template>

<script>
import FooterBar from "../components/FooterBar.vue";
    export default {
        name: 'ProfilePage',
        components: {
            FooterBar
        },
    }
</script>
