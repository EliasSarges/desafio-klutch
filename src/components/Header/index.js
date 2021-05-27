import React from "react";
import { View, ImageBackground, StatusBar } from "react-native";

import HeaderImage from "../../assets/images/racao.jpg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ShoppingBasket from "../../assets/icons/shopping-basket.svg";

import Input from "../Input";

import { Container, HeaderIcon, styles } from "./styles";

export default function Header() {
  return (
    <Container>
      <ImageBackground source={HeaderImage} style={styles.headerImage}>
        <View style={styles.headerContent}>
          <HeaderIcon>
            <ArrowLeft width={20} height={20} />
          </HeaderIcon>

          <Input placeholder="buscar produtos" />

          <HeaderIcon>
            <ShoppingBasket width={25} height={25} />
          </HeaderIcon>
        </View>
      </ImageBackground>
    </Container>
  );
}
