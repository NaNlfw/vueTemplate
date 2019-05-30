/**
 * mixin用来封装相同的逻辑代码
 */


/**
 * @description 改变传入状态
 */
export const changeState = {
    data() {

    },
    methods: {
        change() {
            this.state = !this.state;
        }
    }
}