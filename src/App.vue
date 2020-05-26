<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
                temporary
        >
            <v-list>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link
                             v-for="item in items"
                             :key="item.title"
                             :to="item.url"
                >
                    <v-list-item-icon>
                        <v-icon dense v-if="item.icon" :color="item.color">{{item.icon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
                app
                clipped-left
        >
            <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
            class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-icon>mdi-cube-send</v-icon>
                Sender
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text
                       v-for="item in items"
                       :key="item.title"
                       :to="item.url">
                    <v-icon left>{{item.icon}}</v-icon>
                    <span v-if="item.icon !=='mdi-export'">{{item.title}}</span>
                </v-btn>
            </v-toolbar-items>
            <!--   <v-menu
                       left
                       bottom
               >
                   &lt;!&ndash;        <template v-slot:activator="{ on }">
                           <v-btn icon v-on="on">
                               <v-icon>mdi-dots-vertical</v-icon>
                           </v-btn>
                       </template>

                   <v-list>
                           <v-list-item
                                   v-for="n in 5"
                                   :key="n"
                                   @click="() => {}"
                           >
                               <v-list-item-title>Option {{ n }}</v-list-item-title>
                           </v-list-item>
                       </v-list>&ndash;&gt;
               </v-menu>-->
        </v-app-bar>

        <v-content>
       <!--     <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col class="shrink">
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        :href="source"
                                        icon
                                        large
                                        target="_blank"
                                        v-on="on"
                                >
                                    <v-icon large>mdi-code-tags</v-icon>
                                </v-btn>
                            </template>
                            <span>Source</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-container>-->
            <router-view></router-view>
        </v-content>

        <v-footer app>
            <span>sender &copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            items: [
                {title: 'Login', url: '/login', icon: 'mdi-login-variant', color: 'grey darken-2'},
                {title: 'Sign Up', url: '/reg', icon: 'mdi-account-plus', color: 'grey darken-2'},
                {title: 'Add', url: '/add', icon: 'mdi-playlist-plus', color: 'grey darken-2'},
                {title: 'Edit', url: '/edit', icon: 'mdi-playlist-edit', color: 'grey darken-2'},
                {title: 'List', url: '/list', icon: 'mdi-playlist-play', color: 'grey darken-2'},
                {title: 'About', url: '/about', icon: 'mdi-playlist', color: 'grey darken-2'},

                {title: 'Exit', url: '/exit', icon: 'mdi-export', color: 'grey darken-2'},

            ],
        }),
        created() {
            this.$vuetify.theme.dark = true
        },
    }
</script>
