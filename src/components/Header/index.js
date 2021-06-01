import React, { useState, useContext } from "react";
import { View, ImageBackground, StatusBar } from "react-native";

import HeaderImage from "../../assets/images/racao.jpg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ShoppingBasket from "../../assets/icons/shopping-basket.svg";

import Input from "../Input";
import StatusContext from "../../contexts/StatusContext";
import SearchContext from "../../contexts/SearchContext";

import { Container, HeaderIcon, styles } from "./styles";

export default function Header() {
  const { status, setStatus } = useContext(StatusContext);
  const { search, setSearchState } = useContext(SearchContext);

  return (
    <Container>
      <ImageBackground source={HeaderImage} style={styles.headerImage}>
        <View style={styles.headerContent}>
          <HeaderIcon onPress={() => setSearchState("")}>
            <ArrowLeft width={20} height={20} />
          </HeaderIcon>

          <Input
            placeholder="buscar produtos"
            value={search}
            onChangeText={(text) => setSearchState(text)}
          />

          <HeaderIcon onPress={() => setStatus(!status)}>
            <ShoppingBasket width={25} height={25} />
          </HeaderIcon>
        </View>
      </ImageBackground>
    </Container>
  );
}
