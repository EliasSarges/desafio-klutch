import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

// import Petisco from "../../assets/images/petiscos.png";

import AddButton from "../AddButton";
import { Container, styles, TextContainer } from "./styles";

export default function CarouselItem({ price, description, image }) {
  return (
    <Container>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <TextContainer>
        <Text style={styles.price}>R$ {price}</Text>
        <Text style={styles.description}>{description}</Text>
      </TextContainer>

      <AddButton />
    </Container>
  );
}
