<template>
    <div>
        <div class="card">
        <h1>Jobs</h1>
<div class="card border-light mb-3" style="min-width: 18rem;"  v-for="item in items" :key="item._id" >
  <h5 class="card-header" style="text-align:left"> {{item.jobtitle}}  - <span class="text-primary"> {{item.companyname}} </span></h5>

  <div class="card-body text-muted"  style="text-align:left">
    <div class="card-title" style="text-align:left"><span class="bi-search"><b>Loc :</b></span>  {{item.locations}}</div>
    <div class="card-title mr-sm-2" style="text-align:right;margin-top:-32px;">Exp. : {{item.experience}}</div>
     <p class="card-text" id="jobdesc" ><b>Desc :</b> {{item.jobdesc}}</p>
    <p class="card-text small" id="jobdesc" ><b>Skills :</b> {{item.skills}}</p>
    <p class="card-text small" id="jobdesc" ><b>Salary :</b> {{item.salary}}</p>
    <router-link :to="{name: 'EditJobs', params: { id: item.id }}" class="badge btn btn-primary btn-sm">Edit</router-link>
    <router-link :to="{name: 'ViewJob', params: { id: item.id }}" class="badge btn btn-primary btn-sm">View</router-link>
    <button class="badge btn btn-primary btn-sm" v-on:click="deletejob(item.id)">Delete</button>
  </div>
   </div>
</div>
    </div>
    
</template>

<script>
  //import axios from 'axios';
    export default {
        data(){
            return{
                items: [
                   
                ]
            }
        },

        created: function()
        {
            this.fetchItems();
        },
        mounted:function()
        {
            this.fetchItems();
        },
        methods: {
            fetchItems()
            {
                console.log("ok");
              let uri= 'http://localhost:8000/jobs/';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
                  console.log(this.items)
              });
            },
            deletejob(id)
            {
              let uri = 'http://localhost:8000/jobs/delete/' + id;
                this.axios.delete(uri, this.item).then((response) => {
                  this.$router.go();
                  console.log(response)
                  console.log(this.item)
                 alert("Job Deleted")
                });
            }

        }
    }
</script>
<style>
#jobdesc
{
    white-space: nowrap; 
            width: 50%;
            min-height: 20%;
             overflow: auto;
            text-overflow: ellipsis;
}
.btn{
  margin-left:10px;
}
</style>