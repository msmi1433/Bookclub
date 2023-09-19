import { StyleSheet} from "react-native";

import TabNavigation from "./navigation/TabNavigation";

export default function App() {
  return (
   <TabNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
