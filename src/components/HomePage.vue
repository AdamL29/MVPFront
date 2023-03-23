<template>
  <v-container>
    <h1 class="welcome" >Welcome To Seek-N-Peek</h1>
    <MapPage/>
    <div v-for="pin in pins" :key="pin.title">
      {{ pins.title }}
    </div>
    <FooterBar/>
    
  </v-container>
</template>

<script>
import MapPage from "../components/VueLeaflet.vue";
import FooterBar from "../components/FooterBar.vue";
import axios from "axios";
// import router from '@/router';

  export default {
    name: 'HomePage',
    components: {
      MapPage,
      FooterBar
    },
    data() {
      return {
        apiUrl : process.env.VUE_APP_API_URL,
        pins : [],
      }
    },
      methods: {
            getPins(){
                axios.request({
                    url: this.apiUrl+'/pins',
                    method: "GET",
                    data: {
                        title: this.title,
                        summary: this.summary,
                        createdAt: this.createdAt,
                        photo: this.photo,
                        resource: this.resource,
                    }
                }).then((response)=>{
                    console.log(response.data)
                    // Const?
                    const info = response.data;
                    this.pins = info;
                    // emit?
                    // this.$root.$emit('data', response.data)
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
      mounted () {
        this.getPins();
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