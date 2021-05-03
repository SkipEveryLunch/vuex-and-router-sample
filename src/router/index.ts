import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Tasks from "@/pages/Tasks.vue";
import Task from "@/pages/Task.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path:"",
    component:Tasks
  },
  {
    path:"/tasks/:id",
    component:Task
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
