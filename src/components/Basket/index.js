import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OpenBasketButton from "../OpenBasketButton";

import { Container, styles, BasketContent } from "./styles";

export default function Basket({ active, setActive }) {
  return (
    <Container>
      <BasketContent></BasketContent>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setActive(!active)}
      >
        <Text style={{ color: "white", fontSize: 25 }}>X</Text>
      </TouchableOpacity>

      <OpenBasketButton title="Continuar" onPress={() => setActive(!active)} />
    </Container>
  );
}
