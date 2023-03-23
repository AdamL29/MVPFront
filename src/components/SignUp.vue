<template>
    <v-container>
        <h1>Create an Account</h1>
            <h3>Username:</h3>
                <v-text-field
                v-model="userName"
                />
            <h3>Password:</h3>
                <v-text-field
                v-model="password"
                />
            <h3>Email:</h3>
                <v-text-field
                v-model="email"
                />
            <h3>First Name:</h3>
                <v-text-field
                v-model="firstName"
                />
            <h3>City:</h3>
                <v-text-field
                v-model="city"
                />
            <h3>Bio:</h3>
                <v-text-field
                v-model="bio"
                />
            <h3>Profile Img URL:</h3>
                <v-text-field
                v-model="profileImg"
                />
            <v-btn @click="signUpCall">
            Create Account
            </v-btn>
            <FooterBar/>
    </v-container>
</template>

<script>
import FooterBar from "../components/FooterBar.vue";
import axios from "axios";
import cookies from "vue-cookies"
import router from '@/router';

    export default {
        name: "SignUp",
        components: {
            FooterBar
    },
        data() {
            return {
                apiUrl: process.env.VUE_APP_API_URL,
                token: "",
                userName: "",
                password: "",
                email: "",
                firstName: "",
                city: "",
                bio: "",
                profileImg: "",
            }
        },
        methods: {
            signUpCall(){
                axios.request({
                    url: this.apiUrl+'/sign-up',
                    method: "POST",
                    headers: {
                        "token": this.token,
                    },
                    data: {
                        email: this.email,
                        password: this.password,
                        firstName: this.firstName,
                        username: this.userName,
                        city: this.city,
                        bio: this.bio,
                        profileImg: this.profileImg,
                    }
                }).then((response)=>{
                    cookies.set('token', response.data.token);
                    cookies.set('clientId', response.data.clientId);
                    console.log(this.apiKey);
                    router.push('/sign-in');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>