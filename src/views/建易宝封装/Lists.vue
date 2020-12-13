<template>
    <div>
        <my-list @indexData='indexData' :List='List'></my-list>
        <my-list @indexData='indexData' :List='Lists'></my-list>
    </div>
</template>

<script>
import MyList from '../建易宝封装/List'
export default {
    components: { MyList },
    data() {
        return {
            List: [
                'wenwen',
                'wenwen2',
                'wenwen3',
                'wenwen4',
                'wenwen5',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
                'wenwen6',
            ],
            Lists:[
                'wen',
                'wen2',
                'wen3',
                'wen4',
                'wen5',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
                'wen6',
            ]
        }
    },
    methods:{
        indexData(data){
            console.log( data.List === this.List)
        }
    }
}
</script>

<style>
</style>