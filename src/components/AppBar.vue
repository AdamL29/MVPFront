<template>
    <v-app>
        <v-app-bar
        app
        color="yellow"
        dark
        >
        <v-btn @click="reloadPage"
            text>
    <!-- Below will refresh home page or send client back to home page. -->
            <span class="mr-2">Home</span>
        </v-btn>
        <v-btn 
            class="profile"
            @click="myProfile"
            target="_self"
            text
        >
            <span class="mr-2">My Profile</span>
        </v-btn>
        <span>
            <p onload="currentDate" id="date"></p>
        </span>
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
            @click="signUp"
            target="_self"
            text
        >
            <span class="mr-2">Sign-up</span>
        </v-btn>
    <!-- Above sends to sign-up page -->
    <!-- Below sends to login Page -->
        <v-btn
            @click="signIn"
            target="_self"
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
import router from '@/router';
export default {
    name: "AppBar",
    methods: {
        reloadPage() {
            router.push('/')
            window.location.reload()
        },
        myProfile() {
            router.push('/profile')
        },
        signUp() {
            router.push('/sign-up')
        },
        signIn() {
            router.push('/sign-in')
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
.profile{
    position: absolute;
    left: 25%;
    transform: translateX(-25%);
}
.date{
    position: absolute;
    left: 40%;
    transform: translateX(-40%);
}
</style>