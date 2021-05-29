import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import Petisco from "../../assets/images/petiscos.png";

import AddButton from "../AddButton";
import { Container, styles, TextContainer } from "./styles";

export default function CarouselItem() {
  return (
    <Container>
      <View style={styles.imageContainer}>
        <Image source={Petisco} style={{ width: "100%", height: "100%" }} />
      </View>

      <TextContainer>
        <Text style={styles.price}>R$ 5,21</Text>
        <Text style={styles.description}>Petisco Pedigree</Text>
      </TextContainer>

      <AddButton />
    </Container>
  );
}
