<template>
    <div class="ListData">
        <div @click="HoverClick(index,item)" :class="{spanHover:index===isHover}" v-for="(item,index) of List" :key="index">
            {{item}}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        List: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            isHover: 0
        }
    },
    methods: {
        HoverClick(index,item) {
            this.isHover = index;
            this.$emit('indexData',{index:index,item:item,List:this.List})
        }
    }
}
</script>
<style lang="less" scoped>
.ListData {
    display: flex;
    flex-wrap: wrap;
    div {
        padding: 10px;
        cursor: pointer;
    }
    .spanHover {
        background: red;
    }
}
</style>
