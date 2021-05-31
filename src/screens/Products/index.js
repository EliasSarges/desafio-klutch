import React, { useState, useEffect, useContext } from "react";
import { Container } from "./styles";

import Header from "../../components/Header";

import Carousel from "../../components/Carousel";
import Basket from "../../components/Basket";
import OpenBasketButton from "../../components/OpenBasketButton";
import StatusContext from "../../contexts/StatusContext";
import ShoppingBasketContext from "../../contexts/ShoppingBasketContext";

export default function Products() {
  const { status, setStatus } = useContext(StatusContext);
  const [price, setPrice] = useState(0);

  const { basketProducts, setBasketProducts } = useContext(
    ShoppingBasketContext
  );

  useEffect(() => {
    totalPrice();
  }, [basketProducts]);

  const totalPrice = () => {
    let aux = 0;

    basketProducts.forEach((element) => {
      aux += element.price;
    });

    setPrice(aux.toFixed(2));
  };

  return (
    <Container>
      <Header />
      <Carousel title="Ofertas" />

      {status && <Basket price={price} />}

      {!status && (
        <OpenBasketButton
          title="Ver cesta"
          price={price}
          quantity={basketProducts.length}
          onPress={() => setStatus(!status)}
        />
      )}
    </Container>
  );
}
