<template lang="pug">
    .demo-wrapper
        router-view(name="demonav", v-if="inIframe", v-transition)
        keep-alive(include="home")
            router-view.demo(name="main", v-transition)
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                inIframe: false
            }
        },
        mounted() {
            this.inIframe = location.href.indexOf('demo.html') !== -1;
        }
    };
</script>

<style lang="scss">
    @import "assets/css/common";
    @import "styles/index";

    .demo-wrapper {
        width: 100%;
        min-height: 100vh;
        padding-top: 40px;
        box-sizing: border-box;
        background: #f6f6f6;
        &.in-iframe {
            padding-top: 0;
        }
    }

    .demo {
        padding:0 8px 20px 8px;
    }
</style>
