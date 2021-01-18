<template>
    <div>
  <b-card title="Tasks">
   <List />
  </b-card>
</div>
</template>
<script>
import List from './List.vue'
export default {
     name: 'Main',
     components: {
    List
  }
}
</script>
