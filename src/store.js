// import { createApp } from 'vue'
import { createStore } from 'vuex'
import questions from './questions.js';

// Create a new store instance.
export const store = createStore({
  state: {
      questions,
      storeObj: {},
      gotRight: 0,
      gotWrong: 0,
      len: 0,
      quizLen : questions.length
  },
  mutations: {
    answersArray(state,payload){
      const {key, value} = payload
      // console.log(payload, 'vue')
      
      if(!state.storeObj[key]) state.storeObj[key] = []
      if(state.storeObj[key].length > 0){
        state.storeObj[key].pop()
      } 
      state.storeObj[key].push(value)
      
      state.len = Object.values(state.storeObj).length
    }, 
    resultsRatio(state){
      for(const i in state.questions){
        // console.log('iii',state.questions[i].correct_answer,  state.storeObj[i][0] )
        if(state.questions[i].correct_answer === state.storeObj[i][0]){
          state.gotRight ++
        } else {
          state.gotWrong ++
        }
      }
    }
  }
})
