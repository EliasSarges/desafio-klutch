import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

import ShoppingBasketContext from "../../contexts/ShoppingBasketContext";
import StatusContext from "../../contexts/StatusContext";

import { Container, styles, TextContainer } from "./styles";

export default function OpenBasketButton({ title, price, quantity, ...rest }) {
  const { basketProducts } = useContext(ShoppingBasketContext);
  const { status } = useContext(StatusContext);

  return (
    <Container {...rest}>
      {!status && (
        <TextContainer>
          <View style={styles.quantity}>
            <Text style={{ color: "#ffffff" }}>{quantity ? quantity : 0}</Text>
          </View>
        </TextContainer>
      )}

      {title && (
        <TextContainer style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        </TextContainer>
      )}

      {!status ? (
        <TextContainer>
          <Text
            style={{
              color: "#ffffff",
              textAlign: "right",
            }}
          >
            R$ {price ? price : 0}
          </Text>
        </TextContainer>
      ) : null}
    </Container>
  );
}
