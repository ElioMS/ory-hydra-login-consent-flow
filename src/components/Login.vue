<template>
    <v-container grid-list-md text-xs-center>

        <v-flex offset-md4 md4>
            <v-card>
                <h2> Login </h2>
                <v-form>
                    <v-container  grid-list-md text-xs-center>
                        <v-text-field label="Username" v-model="form.username" outline></v-text-field>
                        <v-text-field label="Password" type="password" v-model="form.password" outline></v-text-field>

                        <v-btn color="warning" block @click="LOGIN"> LOG IN </v-btn>
                    </v-container>
                </v-form>
            </v-card>
        </v-flex>

    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data: function () {
            return {
                form: {
                    username: '',
                    password: '',
                    login_challenge: this.$route.query.login_challenge
                }
            }
        },
        methods: {
            LOGIN(){
                this.$axios.post('http://192.168.1.113:9001/login', this.form)
                    .then((response) => {
                        console.log(response.data.redirect_to)
                        window.open(response.data.redirect_to)
                    })
            }
        }
    }
</script>

<style scoped>

</style>