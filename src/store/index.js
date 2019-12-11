import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },

  actions: {
     createProduct ({commit}, data) {
       commit('createProduct', data)
     }
  },

  mutations: {
    createProduct (state, data) {
      state.products.push(data);
    },

    deleteProduct (state, key) {
      state.products.splice(key,1);
    }
  }
})
