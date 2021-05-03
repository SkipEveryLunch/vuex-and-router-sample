<template>
  <h1>
  {{task.name}}
  </h1>
  <p>id:{{task.id}}</p>
  <P v-if="task.isDone">this task is done.</P>
  <button @click="doneTask">Done</button>
</template>
<script lang="ts">
import {Task} from "@/models/task";
import {reactive,computed} from "vue";
import {useRoute,useRouter} from "vue-router";
import {useStore} from "vuex";
export default {
  name:"Task",
  setup(){
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const {id} = route.params;
    const task = computed(()=>{
      return store.state.tasks.find((task:Task)=>task.id===id);
    });
    const doneTask =()=>{
      store.dispatch("doneTask",id);
    };
    return{
      task,doneTask
    }
  }
}
</script>
<style lang="">
  
</style>