import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  height: 45px;
  width: 90%;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border-radius: 5px;
  background-color: #f3f3f3;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 35%;
  height: 40%;

  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({});
