import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import cart from "../data/cart";
import CartItemList from "../components/CartListItem";

const ShoppingCart = () => {

    const ShoppingCartTotals = () =>{
        return (
            <View style={styles.totalsContainer}>
              <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>410,000 US$</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>10,000 US$</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>420,000 US$</Text>
              </View>
            </View>
          );
    }
  return (
    <>
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartItemList cartItem={item} />}
      ListFooterComponent={ShoppingCartTotals}
    />
    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
    </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
