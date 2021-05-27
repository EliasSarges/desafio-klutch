import React, { Children } from "react";
import { TextInput } from "react-native";

import SearchIcon from "../../assets/icons/search-icon.svg";

import { Container, styles } from "./styles";

export default function Input({ label, ...rest }) {
  return (
    <Container>
      <SearchIcon width={25} height={25} />
      <TextInput {...rest} id={label} style={styles.input} />
    </Container>
  );
}
