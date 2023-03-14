<template>
    <v-app>
        <v-app-bar
        app
        color="yellow"
        dark
        >
        <v-btn @click="reloadPage"
            href="http://192.168.1.71:8080/#/"
            target="_blank"
            text
        >
    <!-- Below will refresh home page or send client back to home page. -->
            <span class="mr-2">Home</span>
        </v-btn>
        <div class="d-flex align-center">
            <v-img
            alt="Logo"
            class="logo"
            contain
            src="./media/DALL·E 2023-03-07 20.41.54 - cartoon map.png"
            transition="scale-transition"
            width="50"
            />


        </div>

        <v-spacer></v-spacer>

        <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
        >
            <span class="mr-2">Sign-up</span>
        </v-btn>
    <!-- Above sends to sign-up page -->
    <!-- Below sends to login Page -->
        <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
        >
            <span class="mr-2">Login</span>
        </v-btn>
        </v-app-bar>

        <v-main>
        <router-view/>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "AppBar",
    methods: {
        reloadPage() {
            window.location.reload()
        }
    },
}
</script>

<style lang="scss" scoped>
.logo{
    display: grid;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>