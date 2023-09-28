import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  // Home page
  bookContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  userInfoContainer: {
    marginTop: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    marginRight: 15,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userBio: {
    fontSize: 18,
    maxWidth: 300,
  },
  bookclubContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    height: 200,
    backgroundColor: "#EBCF9C",
    borderRadius: 10,
    shadowColor: "#424B54",
    borderWidth: 2,
    shadowOpacity: 0.8,
    shadowRadius: 1.8,
    shadowBorderRadius: 10,
    elevation: 5,
    borderColor: "#C5BAAF",
    shadowOffset: {
      height: 0.5,
      width: 1
    }
    
  },
  bookclubImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  bookclubImage: {
    width: 140,
    height: 120,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  bookclubName: {
    textAlign: "center",
    paddingTop: 16,
    fontSize: 18,
    fontWeight: "bold",
  },

  bookText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  input: {
    height: 48,
    borderRadius: 5,
    width: 300,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  commentInput: {
    height: 100,
    borderRadius: 5,
    width: 300,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  basicImage: {
    height: 400,
    width: 400,
  },
  memberImage: {
    height: 200,
    width: 200,
    borderRadius: 50,
  },
  memberContainer: {
    flex: 1,
    padding: 50,
  },
  basicContainer: {
    flex: 1,
    padding: 10,
  },
  giantText: {
    fontSize: 100,
  },
  // Discover page
  findaBookClub: {
    marginBottom: 12,
    color: "#000",
    textAlign: "center",
    paddingTop: 16,
    fontSize: 20,
    fontWeight: "bold",
  },
  findaBookClubContainer: {
    flex: 1,
    padding: 20,
  },

  // Update profile

  updateProfileContainer: {
    flex: 1,
    paddingBottom: 60,
    margin: 20,
    flexDirection: "column",
  },

  updateProfileHeader: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  favBook: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  inputProfileForm: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  updateFavButton: {
    marginTop: 10,
  },
  addBook: {
    marginTop: 10,
    backgroundColor: "#138496",
    padding: 6,
    borderRadius: 6,
    width: 100,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
  updateProfileBtn: {
    marginTop: 10,
    backgroundColor: "#5EC271",
    borderRadius: 10,
    width: 140,
    padding: 10,
    color: "#fff",
    fontSize: 18,
  },
  backProfileBtn: {
    backgroundColor: "grey",
    padding: 10,
    width: 140,
    borderRadius: 10,
    fontSize: 16,
    color: "#fff",
  },
  updateProfileBtnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  searchResultsContainer: {
    height: 300,
    borderRadius: 5,
    borderBottomColor: "black",
    borderWidth: 1,
    margin: 4,
  },
  searchResults: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    paddingBottom: 4,
    paddingTop: 4,
  },
  searchResultText: {
    flex: 1,
    gap: 5,
    flexBasis: 70,
  },
  searchAddBookButton: {
    flex: 1,
  },
  profilePage: {
    flexDirection: "column",
    padding: 10,
    flex: 1,
    backgroundColor: "#FFEBCD",
  },

  usernameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 25,
    margin: 20,
  },
  profileBio: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "dotted",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  favouriteBookContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 4,
    padding: 2,
  },
  favouriteBookImages: {
    flexDirection: "column",
    width: 109,
    height: 156,
    borderRadius: 10,
  },
  favebookcard: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 8,
  },
  button: {
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#F7C17A",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  buttonText: {
    color: "#424B54",
    fontWeight: "bold",
  },

  headerImage: {
    height: 40,
    width: 200,
  },

  header: {
    textAlign: "center",
    fontSize: 36,
    paddingVertical: 36,
    paddingHorizontal: 32,
    fontWeight: "bold",
  },

  //comment pages
  commentPageTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  postCommentBox: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  commentTitleInput: {
    height: 35,
    borderRadius: 5,
    width: 300,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  commentTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  commentContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    borderColor: "#544d4d",
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 8,
    padding: 5,
  },
  commentMetadata: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    marginTop: 15,
  },
  commentMetadataText: {
    fontWeight: "bold",
    color: "#544d4d",
    fontSize: 13,
  },
  commentText: {
    fontSize: 15,
  },

  //Current Read
  bookImage: {
    height: 135,
    width: 90,
    borderRadius: 10,
  },
  currentBookContainer: {
    flex: 1,
    paddingBottom: 20,
    margin: 20,
    flexDirection: "column",
  },
  currentBookText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    paddingBottom: 20,
  },
  bookNameText: {
    paddingTop: 15,
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  bookAuthorText: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  bookDescriptionText: {
    paddingTop: 15,
    padding: 5,
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  nextBookHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 8,
  },
  nextBookByHeader: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 8,
  },
  //modal
  modal: {
    backgroundColor: "#FFEBCD",
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
  modalText: {
    color: "#424B54",
    fontWeight: "bold",
    fontSize: 30,
  },
  modalHeaderText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 21,
    paddingTop: 20,
    paddingBottom: 25,
  },
  modalImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  modalProfileInfo: {
    flex: 1,
    alignItems: "center",
    gap: 15,
  },
  modalCloseButton: {
    marginRight: 370,
  },
  modalCloseButtonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  //Single bookclub page
  singleBookclubHeader: {
    flex: 1,
    alignItems: "center",
    gap:  30,
  },
  singleBookclubTitle: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  singleBookclubImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    
  },
  singleBookclubDescriptionBox: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "dotted",
    padding: 10,
    borderRadius: 10,
  },
  singleBookclubDescriptionText: {
    textAlign: "center",
    fontSize: 17,
  },

  openBook: {
    alignSelf: "center",
  },
  generalChatButton: {
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    width: 350,
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#F7C17A",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  membersButton: {
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 10,
    width: 350,
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#F7C17A",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
});
