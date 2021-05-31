import React, { useState, useContext } from "react";
import { Container, Title, styles } from "./styles";

import Header from "../../components/Header";

import Carousel from "../../components/Carousel";
import Basket from "../../components/Basket";
import OpenBasketButton from "../../components/OpenBasketButton";
import StatusContext from "../../contexts/StatusContext";

export default function Products() {
  const { status, setStatus } = useContext(StatusContext);

  return (
    <Container>
      <Header />
      <Carousel title="Ofertas" />

      {status && <Basket />}

      {!status && (
        <OpenBasketButton
          quantity={4}
          title="Ver cesta"
          price={" R$ 20,84"}
          onPress={() => setStatus(!status)}
        />
      )}
    </Container>
  );
}
