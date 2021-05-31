import React, { useContext, useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import Petisco from "../../assets/images/petiscos.png";

import OpenBasketButton from "../OpenBasketButton";
import AddButton from "../AddButton";

import StatusContext from "../../contexts/StatusContext";
import ShoppingBasketContext from "../../contexts/ShoppingBasketContext";

import {
  Container,
  styles,
  BasketContent,
  BasketHeader,
  BasketItems,
  Item,
  TextContainer,
} from "./styles";

export default function Basket({ price }) {
  const { status, setStatus } = useContext(StatusContext);
  const { setBasketProducts } = useContext(ShoppingBasketContext);

  return (
    <Container>
      <BasketContent>
        <BasketHeader>
          <Text style={{ color: "#BBBBBB", marginTop: 10 }}>SUBTOTAL</Text>
          <Text style={styles.price}>R$ {price}</Text>
        </BasketHeader>

        <BasketItems contentContainerStyle={{ paddingBottom: "30%" }}>
          <TouchableOpacity
            style={{
              width: "100%",
              alignItems: "center",
            }}
            onPress={() => setBasketProducts([])}
          >
            <Text style={{ fontSize: 18 }}>Esvaziar</Text>
          </TouchableOpacity>
        </BasketItems>
      </BasketContent>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setStatus(!status)}
      >
        <Text style={{ color: "#ffffff", fontSize: 25 }}>X</Text>
      </TouchableOpacity>

      <OpenBasketButton title="Continuar" onPress={() => setStatus(!status)} />
    </Container>
  );
}
