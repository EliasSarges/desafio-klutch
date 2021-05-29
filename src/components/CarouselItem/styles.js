import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.TouchableOpacity`
  width: 150px;
  margin: 2px;
  padding-horizontal: 5px;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const styles = StyleSheet.create({
  imageContainer: { width: "100%", height: "45%" },
  price: { fontSize: 20, fontWeight: "bold", color: "#6B6D6E" },
  description: { fontSize: 16, color: "#828484" },
});
