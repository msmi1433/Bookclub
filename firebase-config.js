"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = void 0;
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyCMQ7QkWssKe2nkt3wH3VX1O1K8ayzPc9I",
    authDomain: "bookclub-personal-copy.firebaseapp.com",
    projectId: "bookclub-personal-copy",
    storageBucket: "bookclub-personal-copy.appspot.com",
    messagingSenderId: "123945536970",
    appId: "1:123945536970:web:9084b07750826ce5add333",
};
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
exports.db = (0, firestore_1.getFirestore)(app);
