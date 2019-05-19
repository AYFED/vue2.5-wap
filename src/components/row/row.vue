<template>
    <div class="ayui-row" :class="classObject" :style="styleObject">
    	<slot></slot>
    </div>
</template>

<style lang="scss">
    @import "./row.scss";
</style>

<script>
export default {
    name:'ayui-row',
    props: {
        'type':{
            type:String,
            default:''
        },
        'gutter':{
            type:[String,Number],
            default:''
        },
        'tag':{
            type:String,
            default:'div'
        },
        'justify':{
            type:String,
            default:'start'
        },
        'align':{
            type:String,
            default:'flex-start'
        },
        'flexWrap':{
            type:String,
            default:'nowrap'
        }
    },
    data() {
        return {
            classObject:{
                'ayui-row-flex' : this.type == 'flex',
                'ayui-row-justify-center':this.justify == 'center',
                'ayui-row-justify-end':this.justify == 'end',
                'ayui-row-justify-space-between':this.justify == 'space-between',
                'ayui-row-justify-space-around':this.justify == 'space-around',
                'ayui-row-align-center':this.align == 'center',
                'ayui-row-align-flex-end':this.align == 'flex-end',
                'ayui-row-flex-wrap':this.flexWrap == 'wrap',
                'ayui-row-flex-reverse':this.flexWrap == 'reverse'
            },
            styleObj:{
                'margin-left':-this.gutter+'px',
                'margin-right':-this.gutter+'px'
            }
        };
    },
    computed:{
        styleObject(){
            if(this.gutter!=''){
                return function(){
                    this.styleObj;
                }
            }
        }
    },
    methods: {
        initCol:function(slot){
            for(let i = 0;i<slot.length;i++){
                let tag = slot[i].tag;
                if(typeof tag == 'string'){
                    if(tag.indexOf('ayui-col') != -1) {
                        var slotElm = slot[i].elm;
                        slotElm.style.paddingLeft = this.gutter+'px';
                        slotElm.style.paddingRight = this.gutter+'px';
                    }
                }
            }
        }
    },
    mounted() {
        let slot = [...this.$slots.default];
        this.initCol(slot);
    },
}
</script>
