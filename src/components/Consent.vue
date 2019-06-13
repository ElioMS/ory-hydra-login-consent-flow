<template>
    <v-container>
    	<h2> CONSENT </h2>
    </v-container>
</template>

<script>
    export default {
        data: () => ({

        }),
        created() {
        	window.open(this.$route.query.redirect_to)
        },
        methods: {

        }
    }
</script>

<style>

</style>

