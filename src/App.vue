<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase" @click="$router.push({name: 'index'})">
                <span>ORY</span>
                <span class="font-weight-light">HYDRA</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data() {
            return {
                //
            }
        }
    }
</script>
