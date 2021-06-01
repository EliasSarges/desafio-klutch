import React, { useContext, useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import ArrowRight from "../../assets/icons/arrow-right.svg";
import CarouselItem from "../CarouselItem";

import api from "../../services/api";
import SearchContext from "../../contexts/SearchContext";

import {
  Container,
  styles,
  Title,
  CarouselHeader,
  CarouselBody,
} from "./styles";

export default function Carousel({ title, local }) {
  const [products, setProducts] = useState([]);
  const { search, setSearchState } = useContext(SearchContext);

  //se nao existir texto no campo de busca, faz a requisição dos itens no backend na rota da variavel local
  useEffect(() => {
    if (!search) {
      api.get(local).then(({ data }) => {
        setProducts(data);
      });
    }
  }, []);

  //se existir texto no campo de busca, faz a requisição do backend na rota search passando o texto especifico
  useEffect(() => {
    if (search) {
      api.get(`/search/?name=${search}`).then(({ data }) => {
        setProducts(data);
      });
    }
  }, [search]);

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
