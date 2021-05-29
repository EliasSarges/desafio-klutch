import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  Container,
  styles,
  Title,
  CarouselHeader,
  CarouselBody,
} from "./styles";

import ArrowRight from "../../assets/icons/arrow-right.svg";
import CarouselItem from "../CarouselItem";

export default function Carousel({ title }) {
  return (
    <Container>
      <CarouselHeader>
        <Title>{title}</Title>

        <TouchableOpacity style={styles.seeMore}>
          <Text style={styles.seeMoreText}>Ver mais</Text>
          <ArrowRight width={18} height={16} />
        </TouchableOpacity>
      </CarouselHeader>

      <CarouselBody horizontal>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </CarouselBody>
    </Container>
  );
}
