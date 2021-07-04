<template>
  <div>
        <div class="card">
            <div class="card-body">
                <form >
                    <div class="card">
  <div class="card-header">
    <h3>{{item.jobtitle}}</h3>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p><b>Company : </b>{{item.companyname}}</p>
      <p><b>Description : </b>{{item.jobdesc}}</p>
      <p><b>Requirements : </b>{{item.requirements}}</p>
      <p><b>Skills : </b>{{item.skills}}</p>
      <p><b>Experience : </b>{{item.experience}}</p>
      <p><b>Location : </b>{{item.locations}}</p>
      <p><b>Salary : </b>{{item.salary}}</p>
      <footer class="blockquote-footer">Job is in
           <cite title="Source Title"   v-if="item.is_active">Open Status</cite>
           <cite title="Source Title"   v-else-if="!item.is_active">Closed Status</cite>
    </footer>
    
    </blockquote>
  </div>
</div>

                     <!--   <input type="text" class="form-control"  v-model="this.itemid" /> --->
                    
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                itemid:"NAgarani",
                item:{}
            }
        },

        created: function(){
                       this.getItem();

        },

        methods: {
           getItem()
            {
              this.itemid =  this.$route.params.id;
             let uri = 'http://localhost:8000/jobs/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

        }
    }
</script>