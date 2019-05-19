<template>
    <div class="ayui-col" :class="classObject">
    	<slot></slot>
    </div>
</template>

<style lang="scss">
    @import "./col.scss";
</style>

<script>
export default {
    name:'ayui-col',
    props: {
        'span':{
            type:[String,Number],
            default:'24',
        },
        'offset':{
            type:[String,Number],
            default:'0',
        }
    },
    data() {
        return {
            classObject:{}
        };
    },
    watch:{
        span:{
          handler(val){
            if(val){
                this.classObject = Object.assign(this.classObject,{
                    ['ayui-col-'+val]:this.span == val,
                })
            }
          },
          immediate: true
        },
        offset:{
          handler(val){
            if(val){
                this.classObject = Object.assign(this.classObject,{
                    ['ayui-col-offset-'+val]:this.offset == val,
                })
            }
          },
          immediate: true
        }
    },
    methods: {
    }
}
</script>
