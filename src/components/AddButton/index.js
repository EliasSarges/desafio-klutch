import React, { useContext, useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";

import Plus from "../../assets/icons/plus.svg";
import Minus from "../../assets/icons/minus.svg";

import ShoppingBasketContext from "../../contexts/ShoppingBasketContext";

import { Container, ButtonContainer } from "./styles";

export default function AddButton({ id, price, image, description, ...rest }) {
  const [quantity, setQuantity] = useState(0);

  const { basketProducts, setBasketProducts } = useContext(
    ShoppingBasketContext
  );

  // define a quantidade individual dos itens para 0 caso nao exista item na cesta
  useEffect(() => {
    if (basketProducts.length === 0) {
      setQuantity(0);
    }
  }, [basketProducts]);

  //define a quantidade individual dos itens de acordo com os itens na cesta
  useEffect(() => {
    let aux = 0;
    basketProducts.forEach((element) => {
      if (element.id == id) {
        aux += 1;
      }
      setQuantity(aux);
    });
  }, [basketProducts]);

  // adiciona o produto na cesta
  const addProduct = () => {
    const data = { id, price, image, description };

    setBasketProducts([...basketProducts, data]);
  };

  // remove o produto na cesta
  const removeProduct = (id) => {
    let active = true;

    let products = [...basketProducts];

    basketProducts.forEach((element, index) => {
      if (element.id == id && active) {
        active = false;
        products.splice(index, 1);

        setBasketProducts(products);
      }
    });
  };

  return (
    <Container {...rest}>
      {basketProducts && quantity ? (
        <ButtonContainer onPress={() => removeProduct(id)}>
          <Minus width={"100%"} height={"100%"} />
        </ButtonContainer>
      ) : null}

      {quantity ? (
        <Text>{quantity}</Text>
      ) : (
        <TouchableOpacity onPress={addProduct}>
          <Text
            style={{
              fontSize: 18,
              color: "#92D1A5",
              fontWeight: "bold",
            }}
          >
            Adicionar
          </Text>
        </TouchableOpacity>
      )}

      {basketProducts && quantity ? (
        <ButtonContainer onPress={addProduct}>
          <Plus width={"100%"} height={"100%"} />
        </ButtonContainer>
      ) : null}
    </Container>
  );
}
