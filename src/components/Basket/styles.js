import styled from "styled-components/native";
import { TouchableOpacity, StyleSheet } from "react-native";

export const Container = styled.View`
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;

  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);

  bottom: 0;
`;

export const BasketContent = styled.View`
  width: 100%;
  height: 82%;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: white;
`;

export const styles = StyleSheet.create({
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(0,0,0,0.70)",
    borderRadius: 25,
    position: "absolute",
    top: 50,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
