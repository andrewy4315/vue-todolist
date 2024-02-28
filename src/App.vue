<template>
  <h1>Todolist</h1>
  <Todo />
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>

<style>
body{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
button {
  background: #bbb;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
}
h1 {
  color: #03cfb4;
}
</style>
