<template>
    <div class="font-sans antialiased" id="app">
        <nav class="flex items-center justify-between flex-wrap bg-[#5cbc9d] p-6">
            <div class="flex items-center flex-no-shrink text-white mx-auto">
                <img src="../assets/logo.png" class="w-9 mr-4" alt="">
                <span class="font-[Poppins] font-bold text-xl tracking-tight">GreenWatcher</span>
            </div>
            <div class="block sm:hidden">
                <button @click="toggle"
                    class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

        </nav>
    </div>
</template>

<script >

export default {
    data() {
        return {
            open: false,
        };
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}


</script>