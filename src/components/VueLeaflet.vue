<template>

<div style="height: 600px; width: 100%">
    <div style="height: 100px; overflow: auto;">
        <!-- <p>First marker is placed at {{ withPopup.lat }}, {{ withPopup.lng }}</p>
        <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
        <button @click="showLongText">
            Toggle long popup
        </button> -->
    </div>
    <div id="map">
        <l-map
            ref="myMap"
            @ready="doSomethingOnReady"
            class="map"
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="height: 80%"
            @click="customMarker"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
        >
            <l-tile-layer
            :url="url"
            :attribution="attribution"
            />
            <l-marker :lat-lng="withPopup">
                <l-popup>
                    <div @mouseover="innerClick">
                    I am a popup ADAM!
                        <p v-show="showParagraph">
                            You made this view happen.
                        </p>
                    </div>
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</div>

</template>
    
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import {Icon} from 'leaflet';
import L from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
    name: "MapPage",
    components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    },
    data() {
    return {
            zoom: 11,
            center: latLng(51.044, -114.071),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            withPopup: latLng(51.088, -114.071),
            currentZoom: 11.5,
            currentCenter: latLng(51.044, -114.071),
            showParagraph: false,
            mapOptions: {
                zoomSnap: 0.5
            },
            showMap: true,
            map: null,
            layer: null,
            marker: [],
            message: "Hello"
        };
    },
    methods: {
        doSomethingOnReady(){
            this.map = this.$refs.myMap.mapObject
            this.layer = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
            this.map.addLayer(this.layer);
        },
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
        showLongText() {
            this.showParagraph = !this.showParagraph;
        },
        innerClick() {
            alert("Pin Page to Open on Click!");
        },
        customMarker(item, message) {
            const {latlng}=item;
            console.log("Here",latlng)
            this.clickMarker(latlng, message)
        },
        clickMarker(e, message){
            L.marker(e, {draggable:true}).addTo(this.map).bindPopup(message);
        },
    mounted () {
        this.doSomethingOnReady();
        this.clickMarker();
        this.$nextTick(() => {
            this.map.ANY_LEAFLET_MAP_METHOD();
        // 
        });
    },
    }
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