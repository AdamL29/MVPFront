<template>

<div style="height: 600px; width: 100%">
    <div style="height: 100px; overflow: auto;">
        <!-- <p>First marker is placed at {{ withPopup.lat }}, {{ withPopup.lng }}</p>
        <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
        <button @click="showLongText">
            Toggle long popup
        </button> -->
    </div>
    <l-map
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
                <div @click="innerClick">
                I am a popup ADAM!
                    <p v-show="showParagraph">
                        You made this view happen.
                    </p>
                </div>
            </l-popup>
        </l-marker>
        <l-marker :lat-lng="withTooltip">
            <l-tooltip :options="{ permanent: true, interactive: true }">
                <div @click="innerClick">
                I am a tooltip ADAM!
                    <p v-show="showParagraph">
                        Did this work for you?.
                    </p>
                </div>
            </l-tooltip>
        </l-marker>
    </l-map>
</div>
</template>
    
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import {Icon} from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
    name: "MapTest3",
    components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
    },
    data() {
    return {
        zoom: 11,
        center: latLng(51.044, -114.071),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        withPopup: latLng(51.088, -114.071),
        withTooltip: latLng(51.044, -114.200),
        currentZoom: 11.5,
        currentCenter: latLng(51.044, -114.071),
        showParagraph: false,
        mapOptions: {
            zoomSnap: 0.5
        },
        showMap: true
    };
    },
    methods: {
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
            alert("Click!");
        },
        customMarker(item) {
            const {latlng}=item;
            console.log("Here",latlng)
        },
    }
};
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