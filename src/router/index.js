import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeuristicTest from '../views/HeuristicOwner.vue'
import HeuristicCheck from '../views/HeuristicCheck.vue'
import HeuristicProblems from '../views/heuristicproblems.vue'
import HeuristicEvaluation from '../views/heuristicevaluation.vue'
import HeuristicEvaluationResult from '../views/HeuristicEvaluationResult.vue'
import DesingTest from '../views/DesingTests.vue'
import DesingTestQuestionary from '../views/DesingTestQuestionary.vue'
import ChecklistDone from '../views/ChecklistDone.vue'
import Register from '../views/Register_2.vue'
import Login from '../views/Loguin_2.vue'
import { useAuthStore } from '../stores/useAuthStore';

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
      component: HeuristicTest,
      meta: { requiresAuth: true }
    },
    {
      path: '/heuristicproblems',
      name: 'heuristicproblems',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HeuristicProblems
      ,
      meta: { requiresAuth: true }
    },
    {
      path: '/o/:ownerId/evaluacion',
      name: 'heuristicevaluation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HeuristicEvaluation
      ,
      meta: { requiresAuth: true }
    },
    {
      path: '/o/:idowner/checklist',
      component: HeuristicCheck,
      meta: { requiresAuth: false }
    },
    {
      path: '/encuestaterminada',
      component: ChecklistDone
      ,
      meta: { requiresAuth: true }
    },
    {
      path: '/o/:ownerId/resultadoevaluacion', component: HeuristicEvaluationResult,
      meta: { requiresAuth: true }
    },
    //rutas desing 
    {
      path: '/pruebadiseno', component: DesingTest,
      meta: { requiresAuth: true }
    },
    {
      path: '/o/:ownerId/cuestionario', component: DesingTestQuestionary,
      meta: { requiresAuth: true }
    },
    //register
    { path: '/register', component: Register },
    //loguin
    { path: '/login', component: Login }

  ]


})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const useAuth = useAuthStore()
  //
  if (requiresAuth && !useAuth.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});
export default router
