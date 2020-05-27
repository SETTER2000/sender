<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img
                        :src="require('../../assets/logo.svg')"
                        class="my-3"
                        contain
                        height="200"
                />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-0 font-weight-bold mt-3">
                    Welcome to Sender
                </h1>
                <v-card width="400" class="mx-auto mt-5">
                    <v-card-title>
                        <h3 class="display-0">Sign Up</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                            <v-text-field label="Email"
                                          prepend-icon="mdi-email-plus"
                                          v-model="email"
                                          type="email"
                                          required
                                          :rules="emailRules"/>
                            <v-text-field
                                    v-model="password"
                                    :append-icon="show1  ? 'mdi-eye':'mdi-eye-off'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1  ? 'text' : 'password'"
                                    label="Password"
                                    prepend-icon="mdi-lock"
                                    name="input-10-1"
                                    hint="At least 8 characters"
                                    :counter="6"
                                    @click:append="show1  = !show1 "
                            />

                   <!--         <v-checkbox
                                    v-model="checkbox"
                                    :rules="[v => !!v || 'You must agree to continue!']"
                                    label="Do you agree?"
                                    required
                            ></v-checkbox>-->

                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn
                                color="warning"
                                class="mr-4"
                                @click="reset"
                        >
                            Clear
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="success"
                               @click="validate"
                               :disabled="!valid">
                            Create Account
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <p class="subheading font-weight-regular">
                    For help and collaboration with other Sender developers,
                    <br>please join our online
                    <a
                            href="https://community.vuetifyjs.com"
                            target="_blank">Discord Community</a>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    export default {
        // name: 'Reg',
        data: () => ({
            valid: true,
            show1: false,
            confirmPassword: false,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => emailRegex.test(v) || 'E-mail must be valid'
            ],
            password: '',
            // passwordRules: [
            //     v => !!v || 'Password is required',
            //     v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
            // ],
            confirmPass: '',
            checkbox: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => (v && v.length >= 6) || 'Min 6 characters',
                // confirmPassRules: v => (v && v === this.password) || 'Password should match',
                emailMatch: () => ('The email and password you entered don\'t match'),

            },
            lazy: false,
        }),
        methods: {
            validate() {
                let f = this.$refs.form.validate();
                let user = {
                    email: this.email,
                    password: this.password
                }
                console.log(user);
                return f ? user : f;
            },
            reset() {
                this.$refs.form.reset()
            }
        }
    }
</script>
