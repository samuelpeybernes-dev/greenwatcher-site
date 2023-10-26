<template>
    <div class="text-center">
        <v-btn color="primary" @click="dialog = true">
            Voir l'équivalence
        </v-btn>

        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <v-card-text>
                    <section id="Séminaires">
                        <article class="big_circle">

                            <div class="circle top_center"><i class="fas fa-hands-helping 1 i_animated"></i>
                                <div class="border"></div>
                            </div>

                            <div class="circle right_top show_circle"><i class="fas fa-users 2"></i>
                                <div class="border"></div>
                            </div>

                            <div class="circle right_bottom"><i class="fas fa-user-plus 3 i_animated"></i>
                                <div class="border"></div>
                            </div>

                            <div class="circle left_bottom"><i class="fas fa-thumbs-up 4 i_animated"></i>
                                <div class="border"></div>
                            </div>

                            <div class="circle left_top"><i class="fas fa-question 5 i_animated"></i>
                                <div class="border"></div>
                            </div>

                            <h3 class="flex items-center h-full justify-center	">{{ footprint }} de C0<span
                                    style="    vertical-align: -9px;font-size: 70%;">2</span></h3>


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
    width: 90px;
    height: 90px;
    background: #1F2021;
    border-radius: 100%;
    transition: 0.3s;
    transition-delay: 0.2s;
}

#Séminaires .big_circle {
    position: relative;
    display: block;
    margin: 5% 0;
    width: 35vw;
    height: 35vw;
    border: black 4px solid;
    border-radius: 100%;
}
</style>