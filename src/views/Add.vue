<template>
  <div class="Add">
    <Add></Add>
    <h1>This is an Add page</h1>
  </div>
</template>
<script>
  // @ is an alias to /src
  import Add from '@/components/Store/Add.vue'

  export default {
    name: 'Add',
    components: {
      Add
    }
  }
</script>
