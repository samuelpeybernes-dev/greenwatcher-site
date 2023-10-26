<template>
    <div class="text-center">

        <v-btn color="#5cbc9d" class="text-white" @click="dialog = true">
            Voir l'équivalence
        </v-btn>

        <v-dialog v-model="dialog" width="40%">
            <v-card>
                <v-card-text style="padding: 7%">
                    <section id="Séminaires">
                        <article class="big_circle">

                            <div class="rounded-2xl	circle top_center">
                                <img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f697.svg" alt="">
                                <p>{{ (this.footprint * 4.5).toFixed(2) }} km en voiture</p>
                                <div class="border"></div>
                            </div>

                            <div class="rounded-2xl	circle right_top show_circle"><img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4a7.svg" alt="">
                                <p>{{ (this.footprint * 3.7).toFixed(2) }} L d'eau</p>
                                <div class="border"></div>
                            </div>

                            <div class="rounded-2xl	circle right_bottom"><img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f969.svg" alt="">
                                <p>{{ (this.footprint * 0.138).toFixed(3) }} kg de viande</p>
                                <div class="border"></div>
                            </div>

                            <div class="rounded-2xl	circle left_bottom"><img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2709.svg" alt="">
                                <p>{{ Math.round((this.footprint * 406).toFixed(1)) }} mails</p>
                                <div class="border"></div>
                            </div>
                            <div class="rounded-2xl	circle left_top"><img class="w-10"
                                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f685.svg" alt="">
                                <p>{{ Math.round((this.footprint * 424).toFixed(1)) }} km en train</p>
                                <div class="border"></div>
                            </div>
                            <h1
                                class="flex items-center h-full justify-center text-center mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-black">
                                <span class="contents text-[#8d6c9f]">{{ footprint }}</span> {{ footprintUnit }} de C0<span
                                    style="display: contents;vertical-align: -20px;font-size: 70%;">2</span> <br> correspond
                                à
                            </h1>

                        </article>
                    </section>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="#5cbc9d" block @click="dialog = false">Fermer</v-btn>
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
        footprintUnit: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            dialog: false,
        }
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
    width: 27%;
    height: 27%;
    background: #EFF4F9;
    transition: 0.3s;
    transition-delay: 0.2s;
    flex-direction: column;
}

#Séminaires .circle p {
    text-align: center;
    font-size: 0.8rem;
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