<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <p class="display-0 font-weight-bold text-right">

                    <template>
                        <div class="text-right">
                            <v-dialog
                                    v-model="dialog2"
                                    width="500"
                            >
                                <template v-slot:activator="{ on }">

                                    <v-icon v-on="on">mdi-help-circle-outline</v-icon>

                                </template>

                                <v-card>
                                    <v-card-title
                                            class="headline grey darken-4"
                                    >
                                        К сведению
                                    </v-card-title>

                                    <v-card-text class=" my-6">
                                        {{help}}
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                                color="primary"
                                                text
                                                @click="dialog2 = false"
                                        >
                                            {{iAccept}}
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </template>

                </p>
                <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                    <template>
                        <v-row align="center">
                            <v-col cols="12" sm="5" md="3">
                                <v-dialog
                                        ref="dialog"
                                        v-model="modal"
                                        :return-value.sync="date"
                                        clearable
                                        persistent
                                        width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                v-model="date"
                                                label="Дата рассылки"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                :rules="[rules.required, rules.min]"
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="12" sm="7" md="9">
                                <v-select
                                        :items="items"
                                        :menu-props="{ top: true, offsetY: true }"
                                        label="Label"
                                        :rules="[rules.required, rules.min]"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </template>

                    <v-container>
                        <v-layout row class="text-center">
                            <v-flex>
                                <v-dialog v-model="dialog" fullscreen hide-overlay
                                          transition="dialog-bottom-transition">
                                    <template v-slot:activator="{ on }" >
                                        <v-spacer v-if="logo.src"></v-spacer>
                                        <v-btn color="primary mt-3" dark v-on="on">
                                            <v-icon left>mdi-alert-box-outline</v-icon>
                                            Add Logo
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-toolbar dark color="primary">
                                            <v-btn icon dark @click="dialog = false">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                            <v-toolbar-title>{{logosText}}</v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            <v-toolbar-items>
                                                <v-btn dark text @click="dialog = false">
                                                    <v-icon>mdi-close</v-icon>
                                                </v-btn>
                                            </v-toolbar-items>
                                        </v-toolbar>
                                        <v-container grid-list-lg>
                                            <v-layout row wrap>
                                                <v-flex xs12
                                                        sm6
                                                        md2
                                                        v-for="lg of logos"
                                                        :key="lg.id">
                                                    <v-card class="mx-auto">
                                                        <v-img class="white--text align-end"
                                                               height="180px"
                                                               :src="lg.src">
                                                            <v-card-title></v-card-title>
                                                        </v-img>

                                                        <v-card-subtitle class="pb-0"></v-card-subtitle>

                                                        <v-card-text class="text--primary d-flex justify-md-space-between">
                                                            <div>{{lg.title}}</div>

                                                            <div>{{lg.description}}</div>
                                                            <div>{{lg.id}}</div>
                                                        </v-card-text>

                                                        <v-card-actions>
                                                            <!--  <v-btn
                                                                      color="orange"
                                                                      text
                                                                      :to="'/add/'+logo.id"
                                                              >
                                                                  Open
                                                              </v-btn>-->
                                                            <v-btn icon color="orange" fab x-small
                                                                   @click="goIm(lg)">
                                                                <v-icon>mdi-upload</v-icon>
                                                            </v-btn>
                                                            <v-spacer></v-spacer>
                                                            <v-btn icon fab x-small
                                                                   color="secondary">
                                                                <v-icon>mdi-beaker-remove</v-icon>
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                        <v-divider></v-divider>

                                    </v-card>
                                </v-dialog>
                            </v-flex>
                        </v-layout>
                        <v-layout row v-if="logo.src" class="mt-10">
                            <v-flex xs12>
                                <v-card
                                        class="mx-auto"
                                        max-width="280"
                                >
                                    <v-img
                                            class="white--text align-end"
                                            height="180px"
                                            :src="logo.src"
                                    >
<!--                                        <v-card-title>Top 10 Australian beaches</v-card-title>-->
                                    </v-img>

                                    <v-card-subtitle class="pb-0">{{logo.id}}</v-card-subtitle>

                                    <v-card-text class="text--primary">
                                        <div>{{logo.description}}</div>

                                        <div>{{logo.title}}</div>
                                    </v-card-text>

                                    <v-card-actions>
                                       <!-- <v-btn
                                                color="orange"
                                                text
                                        >
                                            Share
                                        </v-btn>

                                        <v-btn
                                                color="orange"
                                                text
                                        >
                                            Explore
                                        </v-btn>-->
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-row>
                        <v-col cols="12" rm-12>
                            <v-text-field label="Title"
                                          prepend-icon="mdi-format-title"
                                          v-model="title"
                                          type="text"
                                          clearable
                                          required
                                          :rules="[rules.required, rules.min]"/>
                        </v-col>

                    </v-row>

                    <v-container fluid>
                        <v-sheet
                                elevation="12"
                                class="pa-12"
                        >
                            <v-textarea
                                    label="Description"
                                    :rules="[rules.required, rules.min]"
                                    :value="value"
                                    :clearable=true
                                    rows="1"
                                    v-model="description"
                                    prepend-icon="mdi-semantic-web"
                                    hint="At least 10 characters"
                            ></v-textarea>

                            <!--                                <v-textarea-->
                            <!--                                        class="mx-2"-->
                            <!--                                        label="prepend-icon"-->
                            <!--                                        rows="1"-->
                            <!--                                        prepend-icon="comment"-->
                            <!--                                ></v-textarea>-->

                            <div v-if="title" class="mt-12">
                                <h5 class="display-0 font-weight-light mb-2 text-right">Report</h5>
                                <v-divider></v-divider>
                                <div class="my-8">
                                    <p>Title: <span class="display-0 font-weight-light text--secondary pl-5">{{quotes(title)  }}</span>
                                    </p>
                                    <p>Description: <span class="display-0 font-weight-light text--secondary pl-5">{{quotes(description)  }}</span>
                                    </p>
                                    <p>Link: <span
                                            class="display-0 font-weight-light text--secondary pl-5">{{link}}</span></p>
                                </div>
                            </div>
                        </v-sheet>
                    </v-container>
                    <v-row>
                        <v-col cols="12" sx="12">
                            <v-text-field label="Link"
                                          prepend-icon="mdi-link-plus"
                                          v-model="link"
                                          type="text"
                                          clearable
                                          required
                                          :rules="[rules.required, rules.min, rules.link]"/>
                        </v-col>
                    </v-row>
                </v-form>
                <v-container fluid>
                    <v-row>
                        <v-col
                                cols="12"
                                class="py-2"
                        >
                            <v-btn-toggle v-model="toggle_exclusive" class="d-flex flex-row-reverse">
                                <!-- <v-btn>
                                     <v-icon>mdi-format-align-left</v-icon>
                                 </v-btn>

                                 <v-btn>
                                     <v-icon>mdi-format-align-center</v-icon>
                                 </v-btn>

                                 <v-btn>
                                     <v-icon>mdi-format-align-right</v-icon>
                                 </v-btn>
 -->
                                <v-btn v-for="btn of buttonsMenu"
                                       :key="btn.id"
                                       :to="'/add/'+btn.id">
                                    <v-icon>{{btn.name}}</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="secondary"
                           class="mr-4"
                           @click="reset"
                    >
                        Clear
                    </v-btn>
                    <v-btn color="success"
                           @click="validate"
                           :disabled="!valid"
                    >
                        Create Template
                    </v-btn>
                </v-card-actions>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    // const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/
    export default {
        data: () => ({
            valid: true,
            promo: false,
            templates: [],
            confirmPassword: false,
            switch1: true,
            help: 'На этой странице можно подготовить файл шаблона HTML для отправки в рассылке. Добавьте все поля согласно заголовкам и нажмите кнопку создать. После чего шаблон будет отправлен на почту к исполнителю.\n' +
                'Все неточности и ошибки по работе с программой сообщайте на адрес test@kabanchik.ru',
            picker: '',
            modal: '',
            logo: {},
            title: '',
            link: '',
            toggle_exclusive: '',
            date: '',
            dialog2: false,
            description: '',
            loading3: false,
            iAccept: 'Я понял',
            promoProgram: 'Промо-программы',
            logosText: 'Логотипы',
            dialog: {},
            card: {},
            buttonsMenu: [
                {id: "1", name: 'mdi-playlist-plus'}
            ],
            items: ['Промо-программы', 'Новости компании', 'Новости производителей'],
            logos: [
                {
                    id: '1',
                    title: 'Huawei',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '10',
                    title: 'Huawei1',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJlYTk2ZTg1OS1kMDQ4LTQ4MWUtOWE5MC04ZTFmNTNkZTFjODguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '1123',
                    title: 'Huawei2',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '21',
                    title: 'Huawei3',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '13',
                    title: 'Huawei4',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJhYTEzNDkzYy01NjA4LTRjOTAtYWZmOC01MDA2YTM1YWVjNGMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '18',
                    title: 'Huawei5',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '133',
                    title: 'Huawei5',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '338',
                    title: 'Huawei5',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '148',
                    title: 'Huawei543',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '155',
                    title: 'Huawei523',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '1348',
                    title: 'Huawei5',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '1558',
                    title: 'Huawei32',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '1328',
                    title: 'Huawei112',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '12228',
                    title: 'Huawei211',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
                {
                    id: '168',
                    title: 'Huawei9',
                    src: "https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=="
                },
            ],
            /*   emailRules: [
                   v => !!v || 'E-mail is required',
                   v => emailRegex.test(v) || 'E-mail must be valid'
               ],*/

            // passwordRules: [
            //     v => !!v || 'Password is required',
            //     v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
            // ],
            checkbox: false,
            rules: {
                required: value => !!value || 'Required field.',
                min: v => (v && v.length >= 6) || 'Min 10 characters',
                max: v => (v && v.length <= 25) || 'Max 25 characters',
                link: v => (v && linkRegex.test(v)) || 'URL должен содержать протокол http | https'
            },
            lazy: false,
            value: 'Please insert a description in this field.',
        }),
        methods: {
            validate() {
                let f = this.$refs.form.validate();
                if (f) {
                    this.templates.push({
                        logo: this.logo,
                        title: this.title,
                        date: this.date,
                        description: this.description,
                        link: this.link
                    });
                }
                console.log(this.templates);
                return f;
            },
            reset() {
                this.$refs.form.reset()
            },
            goIm(logo) {
                console.log('logo::: ' , logo);
                this.logo =   Object.assign({},this.logo, logo);
                this.dialog = false;
            },
            quotes: v => (v && v.replace(/[«»]/g, "'")),


        }
    }
</script>
