<template>
  <div class="pt-4 align-middle">
    <img class="mx-auto w-25" :src="changeImage().image" alt="Logo" />
    <h1
      class="text-center mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-black">
      Vous avez déclenché <span class="text-[#8d6c9f]  dark:text-[#8d6c9f]">{{ nbrRequest }}</span> requêtes représentent
      <span class="text-[#8d6c9f] dark:text-[#8d6c9f]-500">{{ requestSize }}</span> {{ requestSizeUnit }}
      de
      données
    </h1>
    <!-- <conversionPopup :footprint="footprint" /> -->
    <div class="relative group mt-8 mx-10 w-9/12">
      <div
        :class="'w-9/12 absolute -inset-1 bg-' + this.changeImage().color + ' bg-animate p-10 rounded-full filter blur-lg sm:mx-auto'" />
      <div
        class="mx-auto w-9/12 relative px-7 py-6 bg-gray-900 ring-4 ring-grey-900 border-8 rounded-full leading-none flex items-top justify-center space-x-6">
        <p class="text-2xl md:text-2xl lg:text-[2.75rem] font-extrabold text-white">

          {{ footprint }}
          <span :class="'text-' + this.changeImage().color + '-500'">{{ footprintUnit }} de C0<span
              style="    vertical-align: -9px;font-size: 70%;">2</span></span>
        </p>
      </div>
    </div>
  </div>
</template>
  
<script >
import conversionPopup from "./conversionPopup.vue";
export default {
  components: {
    conversionPopup
  },
  data() {
    return {
      nbrRequest: localStorage.getItem("nbrRequest") || 0,
      requestSize: localStorage.getItem("requestSizeValue") || 0,
      requestSizeUnit: localStorage.getItem("requestSizeUnit") || '',
      footprint: localStorage.getItem("footprintValue") || 0,
      footprintUnit: localStorage.getItem("footprintUnit") || '',
    };
  },
  beforeCreate() {
    // Vérifier si les paramètres sont présents dans l'URL
    if (this.$route.query.footprint !== undefined && this.$route.query.requestSize !== undefined && this.$route.query.nbrRequest !== undefined) {
      this.nbrRequest = this.$route.query.nbrRequest;
      const formatedFootPrint = JSON.parse(this.$route.query.footprint)
      const formatedRequestSize = JSON.parse(this.$route.query.requestSize)

      // Mettre à jour le local storage
      localStorage.setItem("nbrRequest", this.$route.query.nbrRequest);
      localStorage.setItem("requestSizeValue", formatedRequestSize.formattedValue);
      localStorage.setItem("requestSizeUnit", formatedRequestSize.unit);
      localStorage.setItem("footprintValue", formatedFootPrint.formattedValue);
      localStorage.setItem("footprintUnit", formatedFootPrint.unit);
    }
  },

  methods: {
    changeImage() {
      if (this.footprint >= 0 && this.footprint < 25) {
        return { image: "/logo_green.png", color: "green" };
      } else if (this.footprint >= 25 && this.footprint < 50) {
        return { image: "/logo_yellow.png", color: "yellow" };
      } else if (this.footprint >= 50 && this.footprint < 75) {
        return { image: "/logo_orange.png", color: "orange" };
      } else if (this.footprint >= 75) {
        return { image: "/logo_red.png", color: "red" };
      } else {
        return { image: "/logo_grey.png", color: "grey" };
      }
    },
  },
}


</script>
  