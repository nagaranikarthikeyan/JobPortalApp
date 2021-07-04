<template>
<div id="app" class="container">
    <nav class="navbar navbar-expand-sm  bg-light justify-content-between ">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'CreateJobs' }" class="nav-link"><span  ><b>Add Job</b></span></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ListJobs' }" class="nav-link" ><span  ><b>View Jobs</b></span></router-link>
        </li>
      </ul>
       <router-link :to="{ name: 'Login' }" class="nav-link mr-sm-2" ><span  ><b>Logout</b></span></router-link>
     </nav>

 <transition name='fade'>
   <div id='gap' >  
   <router-view  >
     
   </router-view>
   </div>
 </transition>
</div>
</template>

<script>


export default {
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
.fade-enter, .fade-leave-active {
      opacity: 0
    }
.gap {
      margin-top: 50px;
    }
.mr-sm-2
{
margin-left:100px;

}
</style>
