<template>
  <div class="h-[700px]">
    <p>Nombres de requetes: {{ nbrRequest }}</p>
    <p>Taille des requetes: {{ requestSize }}</p>
    <img class="mx-auto w-25" :src="changeImage().image" alt="Logo" />
    <div class="relative group mt-8 mx-10">
      <div
        :class="'w-50 absolute -inset-1 bg-' + this.changeImage().color + ' bg-animate p-10 rounded-full filter blur-lg sm:mx-auto'" />
      <div
        class="mx-auto w-50 relative px-7 py-6 bg-gray-900 ring-4 ring-grey-900 border-8 rounded-full leading-none flex items-top justify-center space-x-6">
        <p class="text-8xl font-extrabold text-white">
          <span :class="'text-' + this.changeImage().color + '-500'">C02</span>
          16000
        </p>
      </div>
    </div>
  </div>
</template>
  
<script >
export default {
  data() {
    return {
      nbrRequest: localStorage.getItem("nbrRequest") || 0,
      requestSize: localStorage.getItem("requestSize") || 0,
      requestTime: localStorage.getItem("requestTime") || 0,
    };
  },
  created() {
    // Vérifier si les paramètres sont présents dans l'URL
    if (this.$route.query.nbrRequest !== undefined && this.$route.query.requestSize !== undefined) {
      this.nbrRequest = this.$route.query.nbrRequest;
      this.requestSize = this.$route.query.requestSize;
      this.requestTime = this.$route.query.requestTime;
      // Mettre à jour le local storage
      localStorage.setItem("nbrRequest", this.$route.query.nbrRequest);
      localStorage.setItem("requestSize", this.$route.query.requestSize);
      localStorage.setItem("requestTime", this.$route.query.requestTime);
    }
  },

  methods: {
    changeImage() {
      if (this.nbrRequest > 0 && this.nbrRequest < 25) {
        return { image: "/logo_green.png", color: "green" };
      } else if (this.nbrRequest >= 25 && this.nbrRequest < 50) {
        return { image: "/logo_yellow.png", color: "yellow" };
      } else if (this.nbrRequest >= 50 && this.nbrRequest < 75) {
        return { image: "/logo_orange.png", color: "orange" };
      } else if (this.nbrRequest >= 75) {
        return { image: "/logo_red.png", color: "red" };
      } else {
        return { image: "/logo_grey.png", color: "grey" };
      }
    },
  },
}


</script>
  