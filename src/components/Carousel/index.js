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

export default function Carousel({ title, local }) {
  const [products, setProducts] = useState([]);

  // faz a requisição dos itens no backend
  useEffect(() => {
    api.get(local).then(({ data }) => {
      setProducts(data);
    });
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
