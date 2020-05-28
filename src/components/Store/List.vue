<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1  class="display-0 font-weight-bold">List</h1>
                <v-card
                        max-width="475"
                        class="mx-auto"
                        v-for="tmp of myItems"
                        :key="tmp.id"
                >
                    <v-toolbar
                            color="teal"
                            dark
                    >
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>

                        <v-toolbar-title>Settings</v-toolbar-title>
                    </v-toolbar>

                    <v-list two-line subheader>
                        <!--                        <v-subheader>General</v-subheader>-->

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>{{tmp.title}}</v-list-item-title>
                                <v-list-item-subtitle>{{tmp.description}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list
                            subheader
                            two-line
                            flat
                    >
                        <v-subheader>{{tmp.title}}</v-subheader>

                        <v-list-item-group  >
                            <v-list-item>
                                <template>
<!--                                <template v-slot:default="{ active, toggle }">-->
                                  <!--  <v-list-item-action>
                                        <v-checkbox
                                                :input-value="tmp.done"
                                                @change="templateDone"
                                        ></v-checkbox>

                                    </v-list-item-action>-->

                                    <v-list-item-content>
                                        <v-list-item-title>Notifications</v-list-item-title>
                                        <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn class="primary" :to="'/add/'+1">Open</v-btn>
                                    </v-list-item-action>

                                </template>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            myItems() {
                return this.$store.getters.myItems
            }
        }
     /*   name: 'List',
        data: () => ({
            active: {},
            templates: [
                {id: '223', title: 'Landata News', date: '22.05.2020', name: 'ap@lndt.ru', done: false}
            ],
        }),
        methods: {
            templateDone(template) {
                template.done = true
            }
        }*/
    }
</script>
