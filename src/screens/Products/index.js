import React from "react";
import { Container, Title, styles } from "./styles";

import Header from "../../components/Header";

import Carousel from "../../components/Carousel";
import OpenBaketButton from "../../components/OpenBaketButton";

export default function Produtos() {
  return (
    <>
      <Header />
      <Container>
        <Carousel title="Ofertas" />
        <OpenBaketButton />
      </Container>
    </>
  );
}
