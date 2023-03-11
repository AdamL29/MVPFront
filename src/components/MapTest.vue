<template>
    <v-container>
        <div id="container">
            <div id="map"></div>
            <l-map :zoom="zoom" :center="center" @click="addMarker">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker v-for="marker, index in markers" :key="index" :lat-lng="marker" @click="removeMarker(index)"></l-marker>
            </l-map>
        </div>
    </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

    export default{
        name: 'MapTest',
        components: {
            LMap,
            LTileLayer,
            LMarker
    },
    data() {
        return {
            center: L.latLng(51.044, -114.071),
            mapDiv: null,
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            markers: [
                L.latLng(51.822, -114.940),
                L.latLng(52.822, -115.940),
                L.latLng(50.822, -113.940),
            ],
        }
    },
    methods: {
        setupLeafletMap() {
                this.mapDiv = L.map("map").setView(this.center, 11);
                L.tileLayer(
                    {
                        maxZoom: 19,
                        attribution:
                        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                    }
                ).addTo(this.mapDiv);
            },
        removeMarker(index) {
            this.markers.splice(index, 1);
        },
        addMarker(event) {
            this.markers.push(event.latlng);
        }
        },
        mounted(){
            this.setupLeafletMap();
            this.removeMarker();
            this.addMarker();
        }
    };

</script>

<style lang="scss" scoped>
html, body, #container{
    height: 70%;
    margin: 0;
}
</style>