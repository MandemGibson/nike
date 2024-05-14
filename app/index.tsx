import { StyleSheet, View } from "react-native";
import ProductsScreen from "@/src/screens/ProductsScreen";
import ProductDetailsScreen from "@/src/screens/ProductDetailsScreen";
import ShoppingCart from "@/src/screens/ShoppingCart";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen/> */}
      {/* <ProductDetailsScreen/> */}
      <ShoppingCart/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
