const { firebaseApiOrigin } = require("firebase-tools/lib/api");

importScripts('https://www.gstatic.com/firebasejs/11.20.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.20.0/firebase-messaging.js');

firebaseApiOrigin.initializeApp({
  apiKey: "AIzaSyAkAeSJOi4itIT24LF72XI075EMk_Hzcio",
  authDomain: "emlakportal-fe1e3.firebaseapp.com",
  projectId: "emlakportal-fe1e3",
  storageBucket: "emlakportal-fe1e3.appspot.com",
  messagingSenderId: "985574804745",
  appId: "1:985574804745:web:3ee701139e1ac33f7397d8"




});

const messaging = firebase.messaging();