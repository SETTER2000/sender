<template>

    <div>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                                v-for="(item) in items"
                                :key="item.id"
                                :src="item.src"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                        >
                            <div class="car-link"><v-btn class="error" :to="'/add/'+item.id">{{item.title}}</v-btn></div>

                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12
                        sm6
                        md4
                        v-for="itm of promoItems"
                        :key="itm.id">
                    <v-card
                            class="mx-auto"

                    >
                        <v-img
                                class="white--text align-end"
                                height="380px"
                                :src="itm.src"
                        >
                            <v-card-title>{{itm.title}}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">Number {{itm.id}}</v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>{{itm.title}}</div>

                            <div>{{itm.description}}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                    color="orange"
                                    text
                                    :to="'/add/'+itm.id"
                            >
                                Open
                            </v-btn>

                            <v-btn
                                    color="orange"
                                    text
                            >
                                Bay
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<style scoped>
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .3);
        transform: translate(-50%, 0);
        padding: 10px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>
<script>
    export default {
       computed:{
           promoItems(){
               return this.$store.getters.promoItems
           },
           items(){
               return this.$store.getters.items
           }

       }
    }
</script>
