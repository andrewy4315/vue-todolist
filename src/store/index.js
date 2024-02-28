import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
    pinned: []
  },
  mutations: {
    addTodoMut(state, newTodo) {
      state.todos.push(newTodo);
    },
    deleteTodoMut(state, index) {
      state.todos.splice(index, 1);
    },
    pinTodoMut(state, index) {
      state.pinned.push(state.todos.splice(index, 1)[0]);
    },
    unpinMut(state, index) {
      state.todos.push(state.pinned.splice(index, 1)[0]);
    },
    deletePinnedMut(state, index) {
      state.pinned.splice(index, 1);
    },
  },
  actions: {
    addTodoAct({ commit }, todo) {
      commit('addTodoMut', todo);
    },
    deleteTodoAct({ commit }, index) {
      commit('deleteTodoMut', index);
    },
    pinTodoAct({ commit }, index) {
      commit('pinTodoMut', index);
    },
    unpinAct({ commit }, index) {
      commit('unpinMut', index);
    },
    deletePinnedAct({ commit }, index) {
      commit('deletePinnedMut', index);
    },
  },
})
