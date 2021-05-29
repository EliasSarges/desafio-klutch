import React from "react";
import { View, Text } from "react-native";

import { Container, styles, TextContainer } from "./styles";

export default function OpenBasketButton({ quantity, title, price, ...rest }) {
  return (
    <Container {...rest}>
      {quantity && (
        <TextContainer>
          <View style={styles.quantity}>
            <Text style={{ color: "#ffffff" }}>{quantity}</Text>
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

      {price && (
        <TextContainer>
          <Text
            style={{
              color: "#ffffff",
              textAlign: "right",
            }}
          >
            {price}
          </Text>
        </TextContainer>
      )}
    </Container>
  );
}
