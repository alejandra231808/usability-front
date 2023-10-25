import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeuristicTest from '../views/HeuristicOwner.vue'
import HeuristicCheck from '../views/HeuristicCheck.vue'
import HeuristicProblems from '../views/heuristicproblems.vue'
import HeuristicEvaluation from '../views/heuristicevaluation.vue'
import HeuristicEvaluationResult from '../views/HeuristicEvaluationResult.vue'
import ChecklistDone from '../views/ChecklistDone.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pruebasheuristicas',
      name: 'pruebaheuristica',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HeuristicTest
    },
    {
      path: '/heuristicproblems',
      name: 'heuristicproblems',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HeuristicProblems
    },
    {
      path: '/o/:ownerId/evaluacion',
      name: 'heuristicevaluation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HeuristicEvaluation
    },
    {
      path:'/o/:idowner/checklist',
      component:HeuristicCheck
    },
    {
      path:'/encuestaterminada',
      component:ChecklistDone
    },
    {path:'/o/:ownerId/resultadoevaluacion',
      component:HeuristicEvaluationResult}

  ]
})

export default router
