<template>
    <div class="text-center">
        <v-btn color="#5cbc9d" class="text-white" @click="dialog = true">
            Voir l'équivalence
        </v-btn>

        <v-dialog v-model="dialog" width="40%">
            <v-card>
                <v-card-text>
                    <section id="Séminaires">
                        <article class="big_circle">

                            <div class="rounded-2xl	circle top_center"><img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f697.svg" alt="">
                                <div class="border"></div>
                            </div>

                            <div class="rounded-2xl	circle right_top show_circle"><img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4a7.svg" alt="">
                                <div class="border"></div>
                            </div>

                            <div class="rounded-2xl	circle right_bottom"><img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f969.svg" alt="">
                                <div class="border"></div>
                            </div>

                            <div class="rounded-2xl	circle left_bottom"><img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f456.svg" alt="">
                                <div class="border"></div>
                            </div>

                            <div class="rounded-2xl	circle left_top"><img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f685.svg" alt="">
                                <div class="border"></div>
                            </div>
                            <h1
                                class="flex items-center h-full justify-center text-center mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-black">
                                <span class="contents text-[#8d6c9f]">{{ footprint }}</span> de C0<span
                                    style="display: contents;vertical-align: -20px;font-size: 70%;">2</span> <br> correspond
                                à
                            </h1>

                        </article>
                    </section>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        footprint: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            dialog: false,
            car: 0,
            train: 0,
            jean: 0,
            meat: 0,
            water: 0,
        }
    },

    methods: {
        footprintConversion() {
            if (this.footprint >= 0 && this.footprint < 25) {
                this.car = 1.2;
                this.train = 106;
                this.jean = 0.01;
                this.meat = 0.03;
                this.water = 0.9;
            } else if (this.footprint >= 25 && this.footprint < 50) {
                this.car = 1.2;
                this.train = 106;
                this.jean = 0.01;
                this.meat = 0.03;
                this.water = 0.9;
            } else if (this.footprint >= 50 && this.footprint < 75) {
                this.car = 1.2;
                this.train = 106;
                this.jean = 0.01;
                this.meat = 0.03;
                this.water = 0.9;
            } else if (this.footprint >= 75) {
                this.car = 1.2;
                this.train = 106;
                this.jean = 0.01;
                this.meat = 0.03;
                this.water = 0.9;
            }
        },
    },

}
</script>

<style>
#Séminaires .top_center {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
}

#Séminaires .right_top {
    bottom: 68%;
    left: 96%;
    transform: translateX(-50%) translateY(50%);
}

#Séminaires .right_bottom {
    top: 68%;
    left: 84%;
    transform: translateX(-50%) translateY(50%);
}

#Séminaires .left_bottom {
    top: 68%;
    left: 14%;
    transform: translateX(-50%) translateY(50%);
}

#Séminaires .left_top {
    bottom: 68%;
    left: 3%;
    transform: translateX(-50%) translateY(50%);
}

#Séminaires .circle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background: #EFF4F9;
    transition: 0.3s;
    transition-delay: 0.2s;
}

#Séminaires .big_circle {
    position: relative;
    display: block;
    margin: 5% auto;
    width: 25vw;
    height: 25vw;
    border: #8d6c9f 2px solid;
    border-radius: 100%;
}
</style>