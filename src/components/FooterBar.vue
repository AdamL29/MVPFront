<template>
    <v-container>
        <footer>
            <v-btn
            @click="support"
            target="_self"
            text
            >
            <span class="mr-2">Support</span>
            </v-btn>
        </footer>
    </v-container>
</template>

<script>
import router from '@/router';

export default {
    name: 'FooterBar',
    methods: {
        support() {
            router.push('/support')
        }
    },
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