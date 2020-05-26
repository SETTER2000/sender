<template>
  <div class="Edit">
    <Edit></Edit>
    <h1>This is an Edit page</h1>
  </div>
</template>
<script>
  // @ is an alias to /src
  import Edit from '@/components/Store/Edit.vue'

  export default {
    name: 'Edit',
    components: {
      Edit
    }
  }
</script>
