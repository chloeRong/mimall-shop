import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const SAME = 'same'

export default new Vuex.Store({

  state: {
    count: 100,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    },
    doneLen: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    [SAME]: (state) => {
      state.count += 4;
    }
  }
})