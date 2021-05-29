import React from "react";
import { View, Text } from "react-native";

import { Container, styles, TextContainer } from "./styles";

export default function OpenBasketButton({
  quantity = 4,
  title = "Ver cesta",
  price = " R$ 20,84",
}) {
  return (
    <Container>
      <TextContainer>
        <View style={styles.quantity}>
          <Text style={{ color: "#ffffff" }}>{quantity}</Text>
        </View>
      </TextContainer>

      <TextContainer>
        <Text
          style={{
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </TextContainer>

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
    </Container>
  );
}
