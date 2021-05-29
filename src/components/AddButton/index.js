import React from "react";
import { Text, Touchable, TouchableOpacity } from "react-native";

import Plus from "../../assets/icons/plus.svg";
import Minus from "../../assets/icons/minus.svg";

import { Container, ButtonContainer } from "./styles";

export default function AddButton({ status = false, quantity }) {
  return (
    <Container>
      {status && (
        <ButtonContainer>
          <Minus width={"100%"} height={"100%"} />
        </ButtonContainer>
      )}

      {status ? (
        <Text style={{ fontSize: 18 }}>4</Text>
      ) : (
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: "#92D1A5", fontWeight: "bold" }}>
            Adicionar
          </Text>
        </TouchableOpacity>
      )}

      {status && (
        <ButtonContainer>
          <Plus width={"100%"} height={"100%"} />
        </ButtonContainer>
      )}
    </Container>
  );
}
