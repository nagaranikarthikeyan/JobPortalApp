import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import RecruiterMain from './components/Recruiter/recruitermain.vue';
import CreateJobs from './components/Recruiter/CreateJobs.vue';
import ListJobs from './components/Recruiter/ListJobs.vue';
import EditJobs from './components/Recruiter/EditJobs.vue';
import ViewJob from './components/Recruiter/ViewJob.vue';
import CandidateMain from './components/Candidate/CandidateMain.vue';
import CandidateViewJob from './components/Candidate/CandidateViewJob.vue';
import CandidateListJob from './components/Candidate/CandidateListJobs.vue';
import CandidateAppliedJobs from './components/Candidate/CandidateAppliedJobs.vue';

import Login from './components/Login.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import App from './App.vue';
import { BIconArrow90degDown } from 'bootstrap-icons-vue';


Vue.use('BIconArrow90degDown',  BIconArrow90degDown);

Vue.use(VueRouter);
Vue.use(VueAxios,axios);
axios.defaults.headers.get['header-name'] = 'cors'

Vue.config.productionTip = false

const routes = [
  {
     path: '/recuritermain',
     component: RecruiterMain, 
     name: 'recuritermain', 
     children:[
      {
        name:'CreateJobs',
        path:'/recuritermain/createjobs',
        component : CreateJobs
      },
      {
        name:'ListJobs',
        path:'/',
        component : ListJobs,
      },
      {
        name:'EditJobs',
        path:'/recuritermain/editjobs',
        component : EditJobs,
      },
      {
        name:'ViewJob',
        path:'/recuritermain/viewjob',
        component : ViewJob,
      },
    ]
    },
    {
    path: '/candidatemain',
     component: CandidateMain,
     name: 'candidatemain', 
     children:[
      {
        name:'CandidateViewJob',
        path:'/candidatemain/viewjobs',
        component : CandidateViewJob
      },
      {
        name:'CandidateListJob',
        path:'/',
        component : CandidateListJob
      },
      {
        name:'CandidateAppliedJobs',
        path:'/candidatemain/candidateappliedjobs',
        component : CandidateAppliedJobs
      },
    ] 
    },
  
  {
    name:'Login',
    path:'/',
    component : Login
  },
 


]
const router = new VueRouter({mode:'history',routes:routes});

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});/*
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'home'})
    }
  }
  next()
});*/
router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')
