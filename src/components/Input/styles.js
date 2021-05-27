import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  height: 40px;
  flex: 1;
  align-items: center;

  border-radius: 20px;
  background-color: white;

  flex-direction: row;
  padding: 0 10px;
`;

export const styles = StyleSheet.create({
  input: {
    height: "100%",

    flex: 1,
    alignItems: "center",

    paddingLeft: 5,
  },
});
