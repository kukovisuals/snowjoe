// import { createApp } from 'vue'
import { createStore } from 'vuex'
import questions from './questions.js';

// Create a new store instance.
export const store = createStore({
  state: {
      questions,
      storeObj: {},
      // finalAnswers: [],
      index: '0'
  },
  mutations: {
    answersArray(state,payload){
      const {key, value} = payload
      // console.log(payload, 'vue')
      state.index = key
      if(!state.storeObj[key]) state.storeObj[key] = []
      if(state.storeObj[key].length > 0){
        state.storeObj[key].pop()
      } 
      state.storeObj[key].push(value)
      
    }
  }
})
