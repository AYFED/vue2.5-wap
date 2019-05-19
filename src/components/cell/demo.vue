<template lang="pug">
    div
        h4 基本用法
        div
            ayui-cell(title="我是标题", desc="描述文字")
            ayui-cell(:showIcon="true", title="我是标题", subTitle="我是副标题", desc="展示默认ICON")
            ayui-cell(:isLink="true", linkUrl="//m.aoyou.com", :showIcon="true", title="带链接")
        h4 通过Slot插槽分发内容
        div
            ayui-cell(:isLink="true", :showIcon="true")
                span(slot="title") 我是主标题
                span(slot="sub-title") 我是副标，我们通过Slot分发的
                span(slot="desc") 我是描述
            ayui-cell(:showIcon="true")
                span(slot="title") 通过Slot自定义右侧ICON
                span(slot="sub-title") 我是副标，我们通过Slot分发的
                img(slot="icon", src="data:image/svg+xml, %3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 3.2c0-.7-.5-1.2-1.2-1.2-.3 0-.7.1-.9.4-2.4 2.5-6.2 6.8-7.7 8.5-.1.1-.2.2-.4 0L2.1 7.2c-.3-.3-.6-.4-.9-.4-.7 0-1.2.5-1.2 1.1 0 .3.1.6.3.8l.1.1 4.9 4.9c.8.8 1.6 0 2-.5 4.1-4.4 7.9-8.6 8.4-9.2.2-.3.3-.5.3-.8z' fill='rgb(115,115,131)'/%3E%3C/svg%3E", alt="")

</template>

<script>
    import {AyuiCell} from '@/components'

    export default {
        components: {
            AyuiCell
        },
        data() {
            return {};
        },
        methods: {},
        mounted() {
        }
    };
</script>

<style lang="scss" scoped>
    .demo {
        padding-left: 0;
        padding-right: 0;
    }

    h4 {
        padding: 0 10px;
    }
</style>
