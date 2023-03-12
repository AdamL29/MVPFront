<template>
    <div style="height: 300px" :zoom="zoom" :center="center">
        <l-map @click="customMarker"
            @update:zoom="updateZoom"
            @update:center="updateCenter"
            :zoom="zoom"
            :center="center"
            style="heigh: 80%">

            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker @click="makeMarker(item)" :lat-lng="markerLatLng" v-for="item in Array" :key="item.id">
                <l-popup>
                    {{ name }}
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import {Icon} from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        // LPopup,
        // LTooltip
    },
    data () {
        return {
            name: "Adam",
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 10,
            center: [51.044, -114.071],
            markerLatLng: [51.044, -114.071]
        };
    },
    methods: {
        customMarker(item) {
            const {latlng}=item;
            console.log("Here",latlng)
        },
        makeMarker(){

        }
    },
}
</script>
