"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_config_1 = require("../firebase-config");
var firestore_1 = require("firebase/firestore");
var users = require("./users/users.json");
function seedUsers(userData) {
    userData.forEach(function (user) {
        (0, firestore_1.setDoc)((0, firestore_1.doc)(firebase_config_1.db, "users", user.user_user_id), user);
    });
}
seedUsers(users);
