import React, { useContext, useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import ArrowRight from "../../assets/icons/arrow-right.svg";
import CarouselItem from "../CarouselItem";

import api from "../../services/api";

import {
  Container,
  styles,
  Title,
  CarouselHeader,
  CarouselBody,
} from "./styles";

export default function Carousel({ title }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products").then(({ data }) => setProducts(data));
  }, []);

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
        {products &&
          products.map(({ id, price, description, image }) => {
            return (
              <CarouselItem
                key={id}
                id={id}
                price={price}
                description={description}
                image={image}
              />
            );
          })}
      </CarouselBody>
    </Container>
  );
}
