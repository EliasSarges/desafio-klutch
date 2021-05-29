import React, { useState } from "react";
import { Container, Title, styles } from "./styles";
import { View } from "react-native";

import Header from "../../components/Header";

import Carousel from "../../components/Carousel";
import Basket from "../../components/Basket";
import OpenBasketButton from "../../components/OpenBasketButton";

export default function Produtos() {
  const [active, setActive] = useState(true);

  return (
    <Container>
      <Header />
      <Carousel title="Ofertas" />

      {active && <Basket active={active} setActive={setActive} />}

      {!active && (
        <OpenBasketButton
          quantity={4}
          title="Ver cesta"
          price={" R$ 20,84"}
          onPress={() => setActive(!active)}
        />
      )}
    </Container>
  );
}
