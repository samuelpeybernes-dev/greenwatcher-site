<template>
  <navbar style="height: 12%;" />
  <router-view style="height: 86%; display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;" />
  <foooter style="height: 2%;" />
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
