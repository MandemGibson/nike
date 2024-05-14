import { StyleSheet, View } from "react-native";
import ProductsScreen from "@/src/screens/ProductsScreen";

export default function Index() {
  return (
    <View style={styles.container}>
      <ProductsScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
});
