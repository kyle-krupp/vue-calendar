import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import VueTextareaAutosize from "vue-textarea-autosize";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBFIqyBmd_7H5VDOQwNJZOfMwMWnRP14Bg",
  authDomain: "vue-cal-423e2.firebaseapp.com",
  databaseURL: "https://vue-cal-423e2.firebaseio.com",
  projectId: "vue-cal-423e2",
  storageBucket: "vue-cal-423e2.appspot.com",
  messagingSenderId: "658855361762",
  appId: "1:658855361762:web:a961ff7e6f51d7d6ff72bb"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
