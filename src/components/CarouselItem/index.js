import React from "react";
import { View, Image, Text } from "react-native";

import AddButton from "../AddButton";
import { Container, styles, TextContainer } from "./styles";

export default function CarouselItem({ id, price, description, image }) {
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

      <AddButton
        key={id}
        id={id}
        price={price}
        description={description}
        image={image}
      />
    </Container>
  );
}
