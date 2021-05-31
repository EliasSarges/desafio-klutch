import React, { useState } from "react";
import Products from "./src/screens/Products";
import StatusContext from "./src/contexts/StatusContext";

export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      <Products />
    </StatusContext.Provider>
  );
}
