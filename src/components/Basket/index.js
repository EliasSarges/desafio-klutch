import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import Petisco from "../../assets/images/petiscos.png";

import OpenBasketButton from "../OpenBasketButton";
import AddButton from "../AddButton";

import {
  Container,
  styles,
  BasketContent,
  BasketHeader,
  BasketItems,
  Item,
  TextContainer,
} from "./styles";

export default function Basket({ active, setActive }) {
  return (
    <Container>
      <BasketContent>
        <BasketHeader>
          <Text style={{ color: "#BBBBBB", marginTop: 10 }}>SUBTOTAL</Text>
          <Text style={styles.price}>R$ 44,82</Text>
        </BasketHeader>

        <BasketItems contentContainerStyle={{ paddingBottom: "30%" }}>
          {[1, 2, 3, 4].map(() => {
            return (
              <Item>
                <View style={styles.image}>
                  <Image
                    source={Petisco}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>

                <TextContainer>
                  <Text style={{ fontSize: 20, color: "#6C7073" }}>
                    Petisco Pedigree
                  </Text>
                  <Text style={{ fontSize: 16, color: "#B4B5B7" }}>
                    R$ 20,84
                  </Text>
                </TextContainer>

                <AddButton status={true} style={{ flex: 1.5 }} />
              </Item>
            );
          })}

          <TouchableOpacity
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>Esvaziar</Text>
          </TouchableOpacity>
        </BasketItems>
      </BasketContent>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setActive(!active)}
      >
        <Text style={{ color: "#ffffff", fontSize: 25 }}>X</Text>
      </TouchableOpacity>

      <OpenBasketButton title="Continuar" onPress={() => setActive(!active)} />
    </Container>
  );
}
