<template>
    <v-container>
        <div id="container">
            <div id="map"></div>
        </div>  
    </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

    export default {
        name: 'MapTile',
        data() {
            return {
                center: [51.044, -114.071],
                mapDiv: null,
            }
        },
        methods: {
            setupLeafletMap() {
                this.mapDiv = L.map("map").setView(this.center, 11);
                L.tileLayer(
                    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        maxZoom: 19,
                        attribution:
                        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                    }
                ).addTo(this.mapDiv);
            },
            addMarker() {
                L.marker(
                    [51.044, -114.071]
                ).addTo(this.mapDiv).bindPopup('Test Pin').openPopup();
            },
        },
        mounted () {
            this.setupLeafletMap();
            this.addMarker();
        },
    }
</script>

<style lang="scss" scoped>
#map{
    height: 800px;
    width: 600px;
}

// 	https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png
</style>