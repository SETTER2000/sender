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
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12
                        sm6
                        lg4
                v-for="itm of items"
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

<script>
    export default {
        name: 'Home',
        data: () => ({
            items:[
                {id:'120',title:'First item',description:'Hello world item 1',promo:false,src:'https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=='},
                {id:'121',title:'Second item',description:'Hello world item 2',promo:true,src:'https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiIxMWQ5MWU3Ni00NGJlLTQ4NjAtOTNlMS1kMzljOGMzYjUxMTAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=='},
                {id:'122',title:'Third item',description:'Hello world item 3',promo:false,src:'https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiI3YWNkOWNjMy0xMThlLTQ0NjQtYWU5MS1kYzlhNDViMjJmZmEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=='},
                {id:'123',title:'Fore item',description:'Hello world item 4',promo:true,src:'https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiI4NzE1YWM0MS1mODgyLTQ4MzQtYWI2ZC1mYzE5YjhjYzg2YmMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=='},
            ]
        })
    }
</script>
