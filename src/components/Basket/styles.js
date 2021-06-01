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
  z-index: 2;
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

export const BasketHeader = styled.View`
  width: 100%;
  height: 15%;

  justify-content: center;

  padding-left: 20px;
  margin-bottom: 10px;
`;

export const BasketItems = styled.ScrollView`
  width: 100%;
  flex: 1;

  padding-vertical: 15px;
  background-color: #f8f9fb;
`;

export const Item = styled.View`
  width: 100%;
  height: 100px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-horizontal: 15px;
  margin-bottom: 15px;
  background-color: #ffffff;
`;

export const TextContainer = styled.View`
  flex: 3;
  height: 100%;
  padding-top: 15px;
  padding-left: 15px;
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

  price: {
    color: "#44484B",
    fontSize: 24,
    marginTop: 5,
    fontWeight: "bold",
  },

  image: {
    flex: 1,
    height: "100%",
    paddingVertical: 15,
  },
});
