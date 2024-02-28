<template>
  <Modal v-if="showModal" @close="toggleModal" />

  <div id="todo-container">
    <div id="todo-list">
      <!-- Pinned todos -->
      <div v-for="(todo, index) in pinned" :key="'pinned-' + index" class="todo-pinned">
        <button class="pin-btn" @click="unpin(index)">Unpin</button>
        <span>{{ todo }}</span>
        <button class="delete-btn" @click="deletePinned(index)">Delete</button>
      </div>

      <!-- Regular todos -->
      <div v-for="(todo, index) in todos" :key="'regular-' + index" class="todo-item">
        <button class="pin-btn" @click="pin(index)">Pin</button>
        <span>{{ todo }}</span>
        <button class="delete-btn" @click="deleteTodo(index)">Delete</button>
      </div>

      <!-- Add button -->
      <button @click="toggleModal" id="addbtn">Add</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapState(['todos', 'pinned']),
  },
  methods: {
    ...mapActions(['addTodoAct', 'deleteTodoAct', 'pinTodoAct', 'unpinAct', 'deletePinnedAct']),

    deleteTodo(index) {
      this.deleteTodoAct(index)
    },
    pin(index) {
      this.pinTodoAct(index)
    },
    unpin(index){
      this.unpinAct(index)
    },
    deletePinned(index){
      this.deletePinnedAct(index)
    },

    toggleModal() {
      this.showModal = !this.showModal
    },
  }
}
</script>

<style>
#todo-container {
  margin-left: 20px;
  margin-right: 20px;
}
#todo-list {
  background: #EEEAA2;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin: auto;
  padding: 10px 20px;
  max-width: 800px;
  text-align: left;
}
.todo-item, .todo-pinned {
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255,255,255,0.6);
}
.todo-pinned {
  background: rgba(255,255,255,0.8);
  border: 1px solid red;
}
.todo-item .pin-btn, .todo-pinned .pin-btn {
  margin-right: 10px;
}
.todo-item .delete-btn, .todo-pinned .delete-btn {
  margin-left: auto;
}
#addbtn {
  margin-top: 10px;
  background: #9E9;
  font-size: 18px;
}
</style>