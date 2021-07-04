<template>
  <div>
        <div class="card">
          
                <h1>Add Job</h1>
          
           <div class="card-body">
               <form v-on:submit.prevent="addjob">
              <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Job Title</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control" v-model="item.jobtitle" required >
    </div>
  </div>
  <div class="form-group row">
    <label for="company" class="col-sm-2 col-form-label">Company</label>
    <div class="col-sm-10">    
   <input type="text"  class="form-control" id="comapany" v-model="item.companyname" required>
    </div>
     </div>
  <div class="form-group row">
    <label for="desc" class="col-sm-2 col-form-label">Job Desc </label>
    <div class="col-sm-8">
     <textarea class="form-control" rows="5" id="desc" v-model="item.jobdesc" style="margin-left:76px" required></textarea>
    </div>
  </div>
  <div class="form-group row">
    <label for="require" class="col-sm-2 col-form-label">Job Requirements </label>
    <div class="col-sm-8">
     <textarea class="form-control" rows="5" id="require" v-model="item.requirements" style="margin-left:76px"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <label for="loc" class="col-sm-2 col-form-label">Job Locations</label>
    <div class="col-sm-10">
   <input type="text" required class="form-control " id="loc" v-model="item.locations">
    </div>
      </div>
     <div class="form-group row">
    <label for="exp" class="col-sm-2 col-form-label">Experience</label>
    <div class="col-sm-10">    
   <input type="text" required class="form-control " id="exp" v-model="item.experience"> 
    </div>
     </div>
      <div class="form-group row">
    <label for="skill" class="col-sm-2 col-form-label">Skills</label>
    <div class="col-sm-10">    
   <input type="text" required  class="form-control" id="skill" v-model="item.skills">
    </div>
     </div>
     <div class="form-group row">
    <label for="salary" class="col-sm-2 col-form-label">Salary</label>
    <div class="col-sm-10">    
   <input type="text" required class="form-control" id="salary" v-model="item.salary">
    </div>
     </div>
    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add JOB"/>
                    </div>

                </form>
           </div>
        </div>
  </div>
</template>

<script>
export default {
  components: {
      //name: 'AddItem'
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
     greet: function () {
               alert("Job Added")
            },
      addjob() {
           let uri = 'http://localhost:8000/jobs/';
            this.axios.post(uri, this.item).then((response) => {
              console.log(response)
                this.greet();
                 this.$router.go();
            });
        }
    }
}

</script>
<style>
.row
{
 margin-top: 30px;
}
</style>