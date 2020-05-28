import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state ={
  message: 'Thank you for contacting me',
  username: ''
};
const getters ={
  welcomeMessage( state ){
    return `${state.message} ${state.username}`;
  }
};
const mutations={
  setUserName(state,userName){
    state.username = userName;
  }
};
const actions = {
  updateUsername({commit},userName){
    commit('setUserName', userName);
  }
};
 const store = new Vuex.Store({
   state,
   getters,
   mutations,
   actions
 });

 export default store;
