import { StyleSheet, View } from "react-native";
import Navigation from "@/src/navigation";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "@/src/store";

export default function Index() {
  return (
    <Provider store={store}>
        <Navigation />

        <StatusBar style="auto" />
    </Provider>
  );
}

