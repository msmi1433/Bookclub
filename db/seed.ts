import { db } from "../firebase-config";
import { collection, addDoc, where, getDocs, query } from "firebase/firestore";

const users = require("./users/users.json");

const classyReadsClub = require("./bookclubs/classy-reads/classy_reads_club.json");
const classyReadsBookChat = require("./bookclubs/classy-reads/classy_reads_bookchat.json");
const classyReadsGenChat = require("./bookclubs/classy-reads/classy_reads_generalchat.json");
const classyReadsPrevReads = require("./bookclubs/classy-reads/classy_reads_previousreads.json");

const conspiracyTheoristsClub = require("./bookclubs/conspiracy-theorists/conspiracy-theorists-club.json");
const conspiracyTheoristsBookChat = require("./bookclubs/conspiracy-theorists/conspiracy-theorists-bookchat.json");
const conspiracyTheoristsGenChat = require("./bookclubs/conspiracy-theorists/conspiracy-theorists-generalchat.json");
const conspiracyTheoristsPrevRead = require("./bookclubs/conspiracy-theorists/conspiracy-theorists-prevread.json");

const horrorHordeClub = require("./bookclubs/horror-horde/horror-horde-club.json");
const horrorHordeBookChat = require("./bookclubs/horror-horde/horror-horde-bookchat.json");
const horrorHordeGenChat = require("./bookclubs/horror-horde/horror-horde-generalchat.json");
const horrorHordePrevRead = require("./bookclubs/horror-horde/horror-horde-prevreads.json");

function addDates(chats: [][]) {
  chats.forEach((chat) => {
    chat.forEach(
      (comment: {
        author: string;
        text: string;
        title: string;
        date?: Date;
      }) => {
        comment.date = new Date();
      }
    );
  });
}

function seedUsers(userData: {
  user_username: string;
  user_avatar_img: string;
  user_bio: string;
  user_bookclubs: string[];
  user_fave_books: {
    book_author: string;
    book_title: string;
    book_img: string;
  };
  forEach: Function;
}) {
  userData.forEach((user: Object) => {
    addDoc(collection(db, "users"), user);
  });
}

function seedBookclub(
  bookclub: {
    name: string;
    currentRead: {
      author: string;
      book_name: string;
      description: string;
      img_url: string;
    };
    description: string;
    genre: string;
    img_url: string;
    members: { [key: string]: string };
  },
  bookChat: { author: string; text: string; title: string; date: Date }[],
  generalChat: { author: string; text: string; title: string; date: Date }[],
  prevReads: {
    author: string;
    book_name: string;
    description: string;
    img_url: string;
  }[]
) {
  addDoc(collection(db, "bookclubs"), bookclub)
    .then(() => {
      const collRef = collection(db, "bookclubs");
      const q = query(collRef, where("name", "==", bookclub.name));
      return q;
    })
    .then((q) => {
      return getDocs(q);
    })
    .then((doc) => {
      let clubId: string = "";
      doc.forEach((club) => {
        clubId = club.id;
      });
      return clubId;
    })
    .then((clubId) => {
      bookChat.forEach((comment) => {
        addDoc(collection(db, "bookclubs", clubId, "book_chat"), comment);
      });
      generalChat.forEach((comment) => {
        addDoc(collection(db, "bookclubs", clubId, "general_chat"), comment);
      });
      prevReads.forEach((prevRead) => {
        addDoc(collection(db, "bookclubs", clubId, "previous_reads"), prevRead);
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

seedBookclub(
  classyReadsClub,
  classyReadsBookChat,
  classyReadsGenChat,
  classyReadsPrevReads
);
seedBookclub(
  conspiracyTheoristsClub,
  conspiracyTheoristsBookChat,
  conspiracyTheoristsGenChat,
  conspiracyTheoristsPrevRead
);

seedBookclub(
  horrorHordeClub,
  horrorHordeBookChat,
  horrorHordeGenChat,
  horrorHordePrevRead
);
