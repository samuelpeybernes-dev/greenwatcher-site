<template>
  <div id="app">
    <navbar />
    <router-view />
    <foooter />
  </div>
</template>

<script >
import navbar from './components/navbar.vue'
import foooter from './components/footer.vue'
export default {
  components: {
    navbar,
    foooter
  },
}


</script>
