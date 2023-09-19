"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = void 0;
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyCNk8WaDgbrpLaHewgmn7mDNzR10zUuvPk",
    authDomain: "bookclub-899af.firebaseapp.com",
    projectId: "bookclub-899af",
    storageBucket: "bookclub-899af.appspot.com",
    messagingSenderId: "761146729032",
    appId: "1:761146729032:web:bcc7778bf6433642e5ae7d"
};
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
exports.db = (0, firestore_1.getFirestore)(app);
