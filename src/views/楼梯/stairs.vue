<template>
    <div class="stairs">
        <div class="isa" v-for="(item,index) in ListData" :key="index" :class="{ isHover: item.is }">
            <slot :index='index'></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ["listIndex"],
    data() {
        return {
            ListData: [],
            index: 0,
        };
    },
    mounted() {
        for (let index = 0; index < this.listIndex; index++) {
            this.ListData.push({
                is: false,
            });
        }
        let item = setInterval(() => {
            this.ListData[this.index].is = true;
            this.index++;
            if(this.index==this.listIndex){
                clearInterval(item)
            }
        }, 1000);
    },
};
</script>
<style scoped>
.stairs {
    display: flex;
    width: 100%;
    /* background: yellow; */
    justify-content: space-between;
    overflow: hidden;
}
.isa {
    /* background: red; */
    /* width: 100px;
    height: 200px; */
    transform: translateY(100%);
    opacity: 0;
}
.isHover {
    transition: all 1s ease;
    transform: translateY(0%) !important;
    opacity: 1;
}
</style>
