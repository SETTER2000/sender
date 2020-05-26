<template>
  <div class="List">
    <List></List>
    <h1>This is an List page</h1>
  </div>
</template>
<script>
  // @ is an alias to /src
  import List from '@/components/Store/List.vue'

  export default {
    name: 'List',
    components: {
      List
    }
  }
</script>
