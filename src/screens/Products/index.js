import React, { useState, useEffect, useContext } from "react";
import { ScrollView } from "react-native";

import Header from "../../components/Header";

import Carousel from "../../components/Carousel";
import Basket from "../../components/Basket";
import OpenBasketButton from "../../components/OpenBasketButton";
import StatusContext from "../../contexts/StatusContext";
import ShoppingBasketContext from "../../contexts/ShoppingBasketContext";
import SearchContext from "../../contexts/SearchContext";

import { Container } from "./styles";

export default function Products() {
  const { status, setStatus } = useContext(StatusContext);
  const [price, setPrice] = useState(0);

  const { basketProducts, setBasketProducts } = useContext(
    ShoppingBasketContext
  );

  const { search } = useContext(SearchContext);

  // calcula o preço total dos produtos sempre que algum item for adicionado ou removido
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
      {/* nao sera exibido quando existir texto na barra de busca */}
      {!search ? (
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ paddingBottom: "15%" }}
        >
          <Carousel title="Ofertas" local={"products"} />
          <Carousel title="Produtos mais vendidos" local={"sale-off"} />
        </ScrollView>
      ) : null}

      {status && <Basket price={price} />}

      {!status && (
        <OpenBasketButton
          title="Ver cesta"
          price={price}
          quantity={basketProducts.length}
          onPress={() => setStatus(!status)}
        />
      )}

      {/* sera exibido quando existir texto na barra de busca */}
      {search ? <Carousel title="resultados" /> : null}
    </Container>
  );
}
