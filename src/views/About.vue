<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    async mounted() {
        // await new Promise(resolve => {
        //         setTimeout(() => {
        //             resolve();
        //         }, 200);
        //     });
        // await setTimeout(() => {
        //         console.log(777)
        //     }, 1000);

        // await setTimeout(() => {
        //         console.log(456465)
        //     }, 200);
        try {
            await this.zhang1(1)
            await this.zhang1(2)
            await this.zhang1(3)
            await this.zhang1(4)
   
        } catch (e) {
            console.log(e);  // some error 
        }


        // console.log('mounted')
    },
    // async created() {
    //     console.log('created')
    // },
    methods: {
        async wen() {
            await console.log('张耀文')
        },
        async wenwen() {
            await console.log('水哥')

        },
        zhang() {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    console.log('hahha')
                }, 5000);
            })
        },
        zhang1(i) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    console.log(i)
                    if(i==3){
                        reject('oh')
                    }
                    resolve('张耀文你好帅啊')
                }, 1000);
            })
        }

    }
}
</script>