import React from "react";
import { View, Text } from "react-native";
import { Container } from "./styles";

import Header from "../../components/Header";

export default function Produtos() {
  return (
    <>
      <Header />
      <Container>
        <Text>Produtos</Text>
      </Container>
    </>
  );
}
