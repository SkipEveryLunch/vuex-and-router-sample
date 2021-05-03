<template>
  <div class="about">
    <h1>This is Tasks page</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
      <router-link :to="`/tasks/${task.id}`">
      {{task.name}}
      </router-link>
      </li>
    </ul>
    <form action="submit" @submit.prevent="onSubmit">
      <input type="text" v-model="newTask">
      <button>Add</button>
    </form>
  </div>
</template>
<script lang="ts">
import {useStore} from "vuex";
import {computed,ref} from "vue";
export default{
  name:"Tasks",
  setup(){
    const store = useStore();
    const newTask = ref("");
    const tasks = computed(()=>{
      return store.state.tasks;
    });
    const onSubmit=()=>{
      store.dispatch("addTask",newTask.value)
      newTask.value = "";
    }
    return{
      tasks,newTask,onSubmit
    }
  }
}
</script>