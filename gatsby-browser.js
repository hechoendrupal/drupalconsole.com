/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Performance Monitoring library
import "firebase/performance";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUgl_md1SZMsyvAmJuj6_HAXAwPW_l6z4",
  authDomain: "drupal-console.firebaseapp.com",
  databaseURL: "https://drupal-console.firebaseio.com",
  projectId: "drupal-console",
  storageBucket: "drupal-console.appspot.com",
  messagingSenderId: "224825349714",
  appId: "1:224825349714:web:a4f2f2e621df3f66d0b18b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Performance Monitoring and get a reference to the service
const perf = firebase.performance();