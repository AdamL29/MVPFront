<template>
    <v-container>
        <h1>Support</h1>
            <h3>Email:</h3>
                <v-text-field
                v-model="email"
                />
            <h3>Subject of Issue:</h3>
                <v-text-field
                v-model="subject"
                />
            <h3>Description of Issue:</h3>
                <v-text-field
                v-model="description"
                />
    </v-container>
</template>

<script>
    export default {
        name: 'SupportPage',
    }
</script>
