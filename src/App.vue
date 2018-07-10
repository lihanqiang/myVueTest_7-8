<template lang="pug">
  div#app
    //- img(src="./assets/logo.png")
    router-view
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
html{
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    body{
        margin: 0;
        padding: 0;
        height: 100%;
        background: url("./assets/login/login_bg.png") no-repeat center center;
        background-size: 100% 100%;
        p, ul, li{
            margin: 0;
            padding: 0;
        }
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        height: 100%;
    }
}
</style>
