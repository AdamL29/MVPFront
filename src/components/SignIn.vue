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
    </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import router from '@/router';

    export default {
        name: "SignIn",
        
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                userEmail: "",
                password: "",
            }
        },
        methods: {
            signIn(){
                axios.request({
                    url: 'https://seeknpeek.adamdom.ca/sign-in',
                    method: "POST",
                    headers: {
                        "x-api-key": this.apiKey,
                    },
                    data: {
                        email: this.userEmail,
                        password: this.password,
                    }
                }).then((response)=>{
                    cookies.set('token', response.data.token);
                    cookies.set('clientId', response.data.clientId);
                    router.push('/explore');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>