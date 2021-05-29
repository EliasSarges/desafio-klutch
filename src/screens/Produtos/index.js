import React from "react";
import { Container, Title, styles } from "./styles";

import Header from "../../components/Header";

import Carousel from "../../components/Carousel";

export default function Produtos() {
  return (
    <>
      <Header />
      <Container>
        <Carousel title="Ofertas" />
      </Container>
    </>
  );
}
