<template>
  <div class="about">
    <About></About>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  // @ is an alias to /src
  import About from '@/components/About.vue'

  export default {
    name: 'About',
    components: {
      About
    }
  }
</script>
