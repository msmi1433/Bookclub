"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_config_1 = require("../firebase-config");
var firestore_1 = require("firebase/firestore");
var users = require("./users/users.json");
var classyReadsClub = require("./bookclubs/classy-reads/classy_reads_club.json");
var classyReadsBookChat = require("./bookclubs/classy-reads/classy_reads_bookchat.json");
var classyReadsGenChat = require("./bookclubs/classy-reads/classy_reads_generalchat.json");
var classyReadsPrevReads = require("./bookclubs/classy-reads/classy_reads_previousreads.json");
var conspiracyTheoristsClub = require("./bookclubs/conspiracy-theorists/conspiracy-theorists-club.json");
var conspiracyTheoristsBookChat = require("./bookclubs/conspiracy-theorists/conspiracy-theorists-bookchat.json");
var conspiracyTheoristsGenChat = require("./bookclubs/conspiracy-theorists/conspiracy-theorists-generalchat.json");
var conspiracyTheoristsPrevRead = require("./bookclubs/conspiracy-theorists/conspiracy-theorists-prevread.json");
var horrorHordeClub = require("./bookclubs/horror-horde/horror-horde-club.json");
var horrorHordeBookChat = require("./bookclubs/horror-horde/horror-horde-bookchat.json");
var horrorHordeGenChat = require("./bookclubs/horror-horde/horror-horde-generalchat.json");
var horrorHordePrevRead = require("./bookclubs/horror-horde/horror-horde-prevreads.json");
function addDates(chats) {
    chats.forEach(function (chat) {
        chat.forEach(function (comment) {
            comment.date = new Date();
        });
    });
}
function seedUsers(userData) {
    userData.forEach(function (user) {
        (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_config_1.db, "users", userData.user_user_id), user);
    });
}
function seedBookclub(bookclub, bookChat, generalChat, prevReads) {
    (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_config_1.db, "bookclubs"), bookclub)
        .then(function () {
        var collRef = (0, firestore_1.collection)(firebase_config_1.db, "bookclubs");
        var q = (0, firestore_1.query)(collRef, (0, firestore_1.where)("name", "==", bookclub.name));
        return q;
    })
        .then(function (q) {
        return (0, firestore_1.getDocs)(q);
    })
        .then(function (doc) {
        var clubId = "";
        doc.forEach(function (club) {
            clubId = club.id;
        });
        return clubId;
    })
        .then(function (clubId) {
        bookChat.forEach(function (comment) {
            (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_config_1.db, "bookclubs", clubId, "book_chat"), comment);
        });
        generalChat.forEach(function (comment) {
            (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_config_1.db, "bookclubs", clubId, "general_chat"), comment);
        });
        prevReads.forEach(function (prevRead) {
            (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_config_1.db, "bookclubs", clubId, "previous_reads"), prevRead);
        });
    });
}
addDates([
    classyReadsBookChat,
    classyReadsGenChat,
    conspiracyTheoristsBookChat,
    conspiracyTheoristsGenChat,
    horrorHordeBookChat,
    horrorHordeGenChat,
]);
seedUsers(users);
seedBookclub(classyReadsClub, classyReadsBookChat, classyReadsGenChat, classyReadsPrevReads);
seedBookclub(conspiracyTheoristsClub, conspiracyTheoristsBookChat, conspiracyTheoristsGenChat, conspiracyTheoristsPrevRead);
seedBookclub(horrorHordeClub, horrorHordeBookChat, horrorHordeGenChat, horrorHordePrevRead);
