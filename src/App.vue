<template>
  <MyLayout/>
</template>

<script>
import { defineComponent } from 'vue'
import MyLayout from 'pages/MyLayout.vue';
export default defineComponent({
  name: 'App',
  components: { MyLayout }
})
</script>
