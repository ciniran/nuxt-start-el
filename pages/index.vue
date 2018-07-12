<template>
  <section class="container">
    <div v-for="(item,index) in doces" :key="index">
        {{item}}
    </div>

  </section>
</template>

<script>

export default {
    auth:false,
data(){
      return {
          doces: '1234',
      }
    },
    mounted(){
      this.$axios.get('article',{params:{a:1}}).then(()=>{
          debugger;
      }).catch(()=>{
          debugger;
      })
    }
}
</script>
<style>
.container {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
