<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- {{id}}----{{name}} -->
  </div>
</template>
<script>
export default {
    // props:["id","name"],
    mounted(){
        // window.console.log(this.$router.currentRoute.params)
        window.console.log(this.$attrs)

    }
  
}
</script>