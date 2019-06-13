<template>
    <div>
        <h2> Callback </h2>
        <v-btn @click="getToken" class="btn"> Token </v-btn>

        <div v-if="response">
            <pre>
                {{ this.response }}
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Callback",
        data() {
          return {
              response: null
          }
        },
        methods: {
            getToken() {
                this.$axios.post('http://192.168.1.113:9001/callback', {
                    //code: this.$route.query.code,
                    //state: this.$route.query.state,
                    clientId: "azteca1",
                    clientSecret: "525348e77144a9cee9a7471a8b67c50ea85b9e3eb377a3c1a3a23db88f9150eefe76e6a339fdbc62b817595f53d72549d9ebe36438f8c2619846b963e9f43a94",
                    grantType: "client_credentials",
                    scope: "openid"
                }).then(response => {
                    this.response = response.data
                })
            }
        }
    }
</script>

<style scoped>

</style>