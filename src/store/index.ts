import { createStore,Commit } from 'vuex'
import {Task} from "@/models/task"

interface State{
  tasks:Task[]
}
export default createStore({
  state: {
    tasks:[] as Task[]
  },
  mutations: {
    ADD_TASK:(state:State,newTask:Task)=>{
      state.tasks = [...state.tasks,newTask]
    },
    DELETE_TASK:(state:State,id:string)=>{
      const newTasks = state.tasks.filter((task:Task)=>{
        return task.id !== id;
      })
    },
    DONE_TASK:(state:State,id:string)=>{
      const doneTask = state.tasks.find((task:Task)=>task.id===id);
      if(doneTask){
        doneTask.isDone = !doneTask.isDone;
      }
    }
  },
  actions: {
    addTask:({commit}:{commit:Commit},name:string)=>{
      const task = new Task(name);
      commit("ADD_TASK",task);
    },
    deleteTask:({commit}:{commit:Commit},id:string)=>{
      commit("DELETE_TASK",id);
    },
    doneTask:({commit}:{commit:Commit},id:string)=>{
      commit("DONE_TASK",id);
    }
  },
  modules: {
  },
})
