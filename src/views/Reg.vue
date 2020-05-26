<template>
  <div class="Reg">
    <Reg></Reg>
    <h1>This is an Reg page</h1>
  </div>
</template>
<script>
  // @ is an alias to /src
  import Reg from '@/components/Auth/Reg.vue'

  export default {
    name: 'Reg',
    components: {
      Reg
    }
  }
</script>
