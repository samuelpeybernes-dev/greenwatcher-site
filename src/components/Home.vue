<template>
  <div class="h-[700px]">
    <p>Nombres de requetes: {{ nbrRequest }}</p>
    <p>Taille des requetes: {{ requestSize }}</p>

  </div>
</template>
  
<script >
export default {
  data() {
    return {
      nbrRequest: null,
      requestSize: null
    };
  },
  created() {
    this.nbrRequest = this.$route.query.nbrRequest;
    this.requestSize = this.$route.query.requestSize;
  }
}


</script>
  