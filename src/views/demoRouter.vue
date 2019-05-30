<template>
    <div class="demo-router">
        Hi guys
    </div>
</template>

<script>
import {changeState} from '@/mixins/mixin';
import { mapState } from 'vuex';
export default {
    name: 'demo-router',
    mixins: [changeState],
    data() {
        return {
            state: false
        }
    },
    computed: {
        todo() {
            return this.$store.state.getters.doneTodos
        }, 
        ...mapState({
            count: ({args}) => console.log(args),
        }),
    },
    methods: {
        testFunction() {
            const temp = (detail) => {
                console.log(detail)
                function aaa() {
                    console.log('aaaaaaa')
                }
                aaa();
                return function() {
                    console.log('a123456789')
                }
            }
            temp('aaaujfdngfu')();
        }
    },
    mounted() {
        /**
         * 调用mixins注入的方法
         */
        console.log('first time state：' + this.state);
        this.change();
        console.log('use mixin then state：' + this.state);

        /**
         * 测试箭头函数
         */
        this.testFunction();
        console.log(this.todo(), 'aaaaaaaaa');
    }
}
</script>

<style lang="scss">
    .demo-router {
        color: rgb(9, 187, 7);
    }
</style>