import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        packages: null
    },

    getters: {
        GET_PACKAGES: state => state.packages
    },

    mutations: {
        ADD_PACKAGES: (state, packages) => {
            state.packages = packages
        }
    }
})