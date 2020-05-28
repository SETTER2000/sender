import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import vuetify from './plugins/vuetify';
// eslint-disable-next-line no-unused-vars
// import * as fb from 'firebase';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: function () {
    // Your web app's Firebase configuration
    let firebaseConfig;
    firebaseConfig = {
      apiKey: "AIzaSyD5R8IUzZq87s4_XTjtVLAzkJxA1rWQjzI",
      authDomain: "sender-811b6.firebaseapp.com",
      databaseURL: "https://sender-811b6.firebaseio.com",
      projectId: "sender-811b6",
      storageBucket: "sender-811b6.appspot.com",
      messagingSenderId: "634468078873",
      appId: "1:634468078873:web:73a64ac0fadbe4d57c6188",
      measurementId: "G-V6YMS0SLL6"
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}).$mount('#app')
