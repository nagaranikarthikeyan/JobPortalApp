<template>
    <div>
        <div class="card">
        <h1>Applied Jobs</h1>
<div class="card border-light mb-3" style="min-width: 18rem;"  v-for="item in items" :key="item._id" >
 <div v-show="appliedjobs.includes(item.id)">
  <h5 class="card-header" style="text-align:left"> {{item.jobtitle}}  - <span class="text-primary"> {{item.companyname}} </span></h5>

  <div class="card-body text-muted"  style="text-align:left">
    <div class="card-title" style="text-align:left"><span class="bi-search"><b>Loc :</b></span>  {{item.locations}}</div>
    <div class="card-title mr-sm-2" style="text-align:right;margin-top:-32px;">Exp. : {{item.experience}}</div>
     <p class="card-text" id="jobdesc" ><b>Desc :</b> {{item.jobdesc}}</p>
    <p class="card-text small" id="jobdesc" ><b>Skills :</b> {{item.skills}}</p>
    <p class="card-text small" id="jobdesc" ><b>Salary :</b> {{item.salary}}</p>
     <router-link :to="{name: 'CandidateViewJob', params: { id: item.id }}" class="badge btn btn-primary btn-sm">View</router-link>
     
   </div>
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
                   
                ],

                appliedjobs:[]
            }
        },

        created: function()
        {
            this.fetchItems();
            this.appliedjobsfromdb();
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
                  console.log("jobs")
                  console.log(this.items)
              });
            },
            appliedjobsfromdb()
            {
                let uri = 'http://localhost:8000/jobsapplied/101';
                this.axios.get(uri).then((response) => {
                    response.data.forEach(element => {
                      this.appliedjobs.push(element.job_id)
                      console.log("ele:"+element.job_id)
                    });
                    //this.appliedjobs = response.data;
                    console.log("applied")
                    console.log(response.data[0].job_id)
                });
            },
            applyjob(id)
            {
                this.item={
                  status:'Open'
              }
              let uri = 'http://localhost:8000/jobs/' + id +'/apply';
                this.axios.post(uri, this.item).then((response) => {
                  this.$router.go();
                  console.log(response)
                  console.log(this.item)
                 alert("Job Applied")
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