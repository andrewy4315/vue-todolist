<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <h1>Add a Todo</h1>
      <input v-model="newTodo" type="text" @keydown.enter="handleEnter" placeholder="Add new todo" id="addtodo">
      <button @click="addTodo" id="addbtn2">Add</button>
    </div>
  </div>
</template>
  
<script>
import { mapActions } from 'vuex'

export default {
  data(){
    newTodo: ''
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },

    ...mapActions(['addTodoAct']),
    addTodo() {
      if (this.newTodo !== undefined && this.newTodo.trim() !== ''){
        this.addTodoAct(this.newTodo)
      }
      this.newTodo = ''
      this.$emit('close')
    },

    handleEnter(event) {
      this.addTodo()
    }
  }
}
</script>

<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 20px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  #addtodo, #addbtn2 {
    font-size: 16px;
  }
  #addbtn2 {
    margin-left: 15px;
  }
</style>