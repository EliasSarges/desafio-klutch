import React, { useContext, useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import Petisco from "../../assets/images/petiscos.png";

import OpenBasketButton from "../OpenBasketButton";
import AddButton from "../AddButton";

import StatusContext from "../../contexts/StatusContext";
import ShoppingBasketContext from "../../contexts/ShoppingBasketContext";

import {
  Container,
  styles,
  BasketContent,
  BasketHeader,
  BasketItems,
  Item,
  TextContainer,
} from "./styles";

export default function Basket({ price }) {
  const { status, setStatus } = useContext(StatusContext);
  const { basketProducts, setBasketProducts } = useContext(
    ShoppingBasketContext
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let aux = Array.from(new Set(basketProducts.map((value) => value.id))).map(
      (id) => {
        return basketProducts.find((value) => value.id === id);
      }
    );
    setProducts(aux);
  }, [basketProducts]);

  return (
    <Container>
      <BasketContent>
        <BasketHeader>
          <Text style={{ color: "#BBBBBB", marginTop: 10 }}>SUBTOTAL</Text>
          <Text style={styles.price}>R$ {price}</Text>
        </BasketHeader>

        <BasketItems contentContainerStyle={{ paddingBottom: "30%" }}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            {products &&
              products.map((product) => {
                return (
                  <Item key={product.id}>
                    <View style={styles.image}>
                      <Image
                        source={{ uri: product.image }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>

                    <TextContainer>
                      <Text style={{ fontSize: 20, color: "#6C7073" }}>
                        {product.description}
                      </Text>
                      <Text style={{ fontSize: 16, color: "#B4B5B7" }}>
                        R$ {product.price}
                      </Text>
                    </TextContainer>

                    <AddButton
                      price={product.price}
                      description={product.description}
                      image={product.image}
                      id={product.id}
                      status={true}
                      style={{ flex: 1.5 }}
                    />
                  </Item>
                );
              })}
            {products.length !== 0 ? (
              <TouchableOpacity
                onPress={() => {
                  setBasketProducts([]);
                  setProducts([]);
                }}
              >
                <Text style={{ fontSize: 18 }}>Esvaziar</Text>
              </TouchableOpacity>
            ) : (
              <Text style={{ fontSize: 18 }}>Sem produtos</Text>
            )}
          </View>
        </BasketItems>
      </BasketContent>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setStatus(!status)}
      >
        <Text style={{ color: "#ffffff", fontSize: 25 }}>X</Text>
      </TouchableOpacity>

      <OpenBasketButton title="Continuar" onPress={() => setStatus(!status)} />
    </Container>
  );
}
