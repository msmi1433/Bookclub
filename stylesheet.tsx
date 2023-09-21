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
    justifyContent: 'space-evenly'
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
}
});
