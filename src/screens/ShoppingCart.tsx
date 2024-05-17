import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import CartItemList from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectNumberOfItems,
  selectSubtotal,
  selectTotal,
} from "../store/cartSlice";
import { FontAwesome5 } from "@expo/vector-icons";

const ShoppingCart = () => {
  const items = useSelector(selectNumberOfItems);

  const ShoppingCartTotals = () => {
    const subtotal = useSelector(selectSubtotal);
    const delivery = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);

    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subtotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>{delivery} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>{total} US$</Text>
        </View>
      </View>
    );
  };

  const cartItems = useSelector((state: any) => state.cart.items);

  return (
    <>
      {items > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItemList cartItem={item} />}
            ListFooterComponent={ShoppingCartTotals}
          />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Checkout</Text>
          </Pressable>
        </>
      ) : (
        <View
          style={{ flex:1, flexDirection:"column", justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome5 name="shopping-cart" size={100} color="gray"/>
          <Text style={{fontSize:20, fontWeight:"400",color:"gray"}}>No item added</Text>
        </View>
      )}
    </>
  );
};

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

export default ShoppingCart;
