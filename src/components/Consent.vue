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
        	console.log("http://localhost:4444/oauth2/auth?audience=&client_id=spring-client1&consent_verifier=9cbbeb43e14944b4bc16568041d66daf&max_age=0&nonce=jlymvfdrxdmujyutpvawguwe&prompt=&redirect_uri=http%3A%2F%2F127.0.0.1%3A4446%2Fcallback&response_type=code&scope=openid+offline&state=tvvidsjvrosayzqqflrvasxy")

        	this.$axios.get('http://localhost:4444/oauth2/auth?audience=&client_id=spring-client1&consent_verifier=9cbbeb43e14944b4bc16568041d66daf&max_age=0&nonce=jlymvfdrxdmujyutpvawguwe&prompt=&redirect_uri=http%3A%2F%2F127.0.0.1%3A4446%2Fcallback&response_type=code&scope=openid+offline&state=tvvidsjvrosayzqqflrvasxy')
        	.then(response => {
        		console.log(response)
        	});
        },
        methods: {

        }
    }
</script>

<style>

</style>

