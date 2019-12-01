<template>
  <div id="app">
    <div>

      <hello-word/>
     
    </div>
  </div>
</template>

<script>
import HelloWord from "./components/HelloWorld"
export default {
  name: "app",
  components: {
    helloWord:HelloWord,
  },
  data() {
    return {
      
    };
  },
  methods: {
  }
};
</script>

<style>
</style>

