import { FlatList, Image, StyleSheet, View, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../store/productsSlice";

const ProductsScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
