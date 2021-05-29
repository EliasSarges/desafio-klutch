import styled from "styled-components/native";
import { TouchableOpacity, StyleSheet } from "react-native";

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  background-color: #5dc369;
  margin-bottom: 5px;
  padding: 0 10px;

  position: absolute;
  bottom: 0;
`;

export const TextContainer = styled.View`
  flex: 1;
`;

export const styles = StyleSheet.create({
  quantity: {
    width: 30,
    height: 30,
    backgroundColor: "#4BA955",
    justifyContent: "center",
    alignItems: "center",
  },
});
