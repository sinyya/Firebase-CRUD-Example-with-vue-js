import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    update:'',

    modalVisible: false,
    modalComponent: null
  },
  mutations:{
    setUpdate(state){
      let current = new Date()
      state.update = current.getFullYear() + '-'
        + ('0' + current.getMonth()+1).slice(-2) + '-'
        + ('0' + current.getDate()).slice(-2) + ' '
        + ('0' + current.getHours()).slice(-2) + ':'
        + ('0' + current.getMinutes()).slice(-2) + ':'
        + ('0' + current.getSeconds()).slice(-2)
    },
    showModal(state, componentName){
      state.modalVisible = true;
      state.modalComponent = componentName;
    },
    hideModal(state){
      state.modalVisible = false;
    }
  }
})
export default store
