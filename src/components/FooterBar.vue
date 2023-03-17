<template>
    <v-container>
        <footer>
            <v-btn
            href="http://192.168.1.71:8080/#/support"
            target="_self"
            text
            >
            <span class="mr-2">Support</span>
            </v-btn>
        </footer>
    </v-container>
</template>

<script>
export default {
    name: 'FooterBar',
}
</script>

<style lang="scss" scoped>
footer{
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
}
</style>