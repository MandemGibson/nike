import { StyleSheet, View } from "react-native";
import ProductsScreen from "@/src/screens/ProductsScreen";
import ProductDetailsScreen from "@/src/screens/ProductDetailsScreen";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen/> */}
      <ProductDetailsScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
