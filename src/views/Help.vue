<template>
  <div class="Help">
    <Help></Help>
    <h1>This is an Help page</h1>
  </div>
</template>
<script>
  // @ is an alias to /src
  import Help from '@/components/Help.vue'

  export default {
    name: 'Help',
    components: {
      Help
    }
  }
</script>
