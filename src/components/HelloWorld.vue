<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-10"
          contain
          height="200"
        />
      </v-col>

     <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mt-8">
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
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>
      <!--
           <v-col
             class="mb-5"
             cols="12"
           >
             <h2 class="headline font-weight-bold mb-3">
               What's next?
             </h2>

             <v-row justify="center">
               <a
                 v-for="(next, i) in whatsNext"
                 :key="i"
                 :href="next.href"
                 class="subheading mx-3"
                 target="_blank"
               >
                 {{ next.text }}
               </a>
             </v-row>
           </v-col>

           <v-col
             class="mb-5"
             cols="12"
           >
             <h2 class="headline font-weight-bold mb-3">
               Important Links
             </h2>

             <v-row justify="center">
               <a
                 v-for="(link, i) in importantLinks"
                 :key="i"
                 :href="link.href"
                 class="subheading mx-3"
                 target="_blank"
               >
                 {{ link.text }}
               </a>
             </v-row>
           </v-col>

           <v-col
             class="mb-5"
             cols="12"
           >
             <h2 class="headline font-weight-bold mb-3">
               Ecosystem
             </h2>

             <v-row justify="center">
               <a
                 v-for="(eco, i) in ecosystem"
                 :key="i"
                 :href="eco.href"
                 class="subheading mx-3"
                 target="_blank"
               >
                 {{ eco.text }}
               </a>
             </v-row>
           </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
