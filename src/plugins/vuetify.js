import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

const vuetify= new Vuetify({
    theme: {
        // themes: {
            // light: {
            //     primary: colors.purple,
            //     secondary: colors.grey.darken1,
            //     accent: colors.shades.black,
            //     error: colors.red.accent3,
            // },
        dark: {
            primary: colors.deepPurple.base,
            secondary: colors.purple.base,
            accent: colors.indigo.base,
            error: colors.pink.base,
            warning: colors.orange.base,
            info: colors.blue.base,
            success: colors.green.base
    // }
    },
}});
export default vuetify
