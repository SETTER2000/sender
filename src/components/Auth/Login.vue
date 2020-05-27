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
                        <h1 class="display-1">Login</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Username"
                                          prepend-icon="mdi-account-circle"/>
                            <v-text-field :type="showPassword ? 'text' : 'password'" label="Password"
                                          prepend-icon="mdi-lock"
                                          :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'"
                                          @click:append="showPassword = !showPassword"/>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="success">Register</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="info">Login</v-btn>
                    </v-card-actions>
                </v-card>
                <p class="subheading font-weight-regular">
                    For help and collaboration with other Sender developers,
                    <br>please join our online
                    <a
                            href="https://community.vuetifyjs.com"
                            target="_blank" >Discord Community</a>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'Login',
        data: () => ({})
    }
</script>
