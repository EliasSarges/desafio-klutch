import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  height: 400px;
  width: 100%;
  padding-horizontal: 15px;
`;

export const CarouselHeader = styled.View`
  height: 50px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;
`;

export const CarouselBody = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #4b4f52;
  font-size: 28px;
  font-weight: bold;
`;

export const styles = StyleSheet.create({
  seeMore: { flexDirection: "row", alignItems: "center" },
  seeMoreText: { color: "#78CC92", fontSize: 18, padding: 5 },
});
