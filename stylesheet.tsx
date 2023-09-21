import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  book: {
    borderWidth: 5,
    borderBlockColor: "blue",
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  bookContainer: {
    flexDirection: "column",
    borderWidth: 1,
    flex: 1,
    justifyContent: "space-evenly",
  },
  basicImage: {
    width: 400,
    height: 400,
  },
  basicSmallImage: {
    width: 100,
    height: 100,
    resizeMode: "center"
  },
  basicContainer: {
    flex: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  giantText: {
    fontSize: 60,
  },
});
