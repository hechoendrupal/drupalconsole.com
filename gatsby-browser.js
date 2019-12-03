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

!function(n,e){var t,o,i,c=[],f={passive:!0,capture:!0},r=new Date,a="pointerup",u="pointercancel";function p(n,c){t||(t=c,o=n,i=new Date,w(e),s())}function s(){o>=0&&o<i-r&&(c.forEach(function(n){n(o,t)}),c=[])}function l(t){if(t.cancelable){var o=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,o){function i(){p(t,o),r()}function c(){r()}function r(){e(a,i,f),e(u,c,f)}n(a,i,f),n(u,c,f)}(o,t):p(o,t)}}function w(n){["click","mousedown","keydown","touchstart","pointerdown"].forEach(function(e){n(e,l,f)})}w(n),self.perfMetrics=self.perfMetrics||{},self.perfMetrics.onFirstInputDelay=function(n){c.push(n),s()}}(addEventListener,removeEventListener);
// The perfMetrics object is created by the code that goes in <head>.
perfMetrics.onFirstInputDelay(function(delay, evt) {
  ga('send', 'event', {
    eventCategory: 'Perf Metrics',
    eventAction: 'first-input-delay',
    eventLabel: evt.type,
    // Event values must be an integer.
    eventValue: Math.round(delay),
    // Exclude this event from bounce rate calculations.
    nonInteraction: true,
  });
});