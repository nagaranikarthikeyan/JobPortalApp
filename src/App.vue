<template>
<div>
  <div id="app" class="container" >
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/"> <b class="text-xl-left font-weight-bold">My Vue App</b></b-navbar-brand>
     </b-navbar>
    
  </div>
   <router-view>
     
    </router-view>
</div>
</template>

<script>

export default {
  
}
</script>