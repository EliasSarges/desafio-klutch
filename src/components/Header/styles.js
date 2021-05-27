import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const Container = styled.View`
  height: 90px;
  width: 100%;
`;

export const HeaderIcon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0 15px;
`;

export const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
  },

  headerContent: {
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    paddingTop: StatusBar.currentHeight,
  },
});
