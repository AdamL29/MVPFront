<template>
    <v-container>
        <h1>Login</h1>
        <h3>User Email:</h3>
            <v-text-field
            v-model="userEmail"
            />
        <h3>User Password:</h3>
            <v-text-field
            v-model="password"
            />
        <v-btn @click="signIn">
        Sign In
        </v-btn>
        <FooterBar/>
    </v-container>
</template>

<script>
import FooterBar from "../components/FooterBar.vue";
import axios from "axios";
import cookies from "vue-cookies";
import router from '@/router';

    export default {
        name: "SignIn",
        components: {
            FooterBar
    },
        data() {
            return {
                apiUrl: process.env.VUE_APP_API_URL,
                token: "user_token",
                userEmail: "",
                password: "",
            }
        },
        methods: {
            signIn(){
                axios.request({
                    url: this.apiUrl+'/sign-in',
                    method: "POST",
                    headers: {
                        "x-api-key": this.token,
                    },
                    data: {
                        email: this.userEmail,
                        password: this.password,
                    }
                }).then((response)=>{
                    cookies.set('token', response.data.token);
                    cookies.set('clientId', response.data.clientId);
                    router.push('/');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>