import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    aaa: {
        args: [
            { id: 1, name: 'aaa' },
            { id: 2, name: 'bbb' },
            { id: 4, name: 'ccc' },
            { id: 5, name: 'ddd' },
        ],
    },
    mutations: {
        increase () {

        }
    },

    getters: {
        doneTodos() {
            return state.aaa.args.length;
        }
    }
}

const store = new Vuex.Store({
    state
});



export default store;