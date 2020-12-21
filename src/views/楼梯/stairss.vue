<template>
    <div style="width:50%">
        <my-stairs :listIndex="5">
            <template slot-scope="index">
                <div style="height:100px;width:100px;background:Red">
                    <div @click="wen(index.index)">{{ListData[index.index].text}}</div>
                </div>
            </template>
        </my-stairs>
    </div>
</template>
<script>
import MyStairs from "./stairs";
export default {
    components: { MyStairs },
    data() {
        return {
            ListData: [
                {
                    text: 'zhangayowen',
                },
                {
                    text: '456',
                },
                {
                    text: '123',
                },
                {
                    text: 'dfsa',
                },
                {
                    text: 'fdsa',
                },
            ],
        };
    },
    methods:{
        wen(index){
            console.log(index)
        }
    }
};
</script>
<style scoped></style>
