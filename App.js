import React, { useState } from "react";
import Products from "./src/screens/Products";

import StatusContext from "./src/contexts/StatusContext";
import ShoppingBasketContext from "./src/contexts/ShoppingBasketContext";

export default function App() {
  const [status, setStatus] = useState(false);
  const [basketProducts, setBasketProducts] = useState([]);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      <ShoppingBasketContext.Provider
        value={{ basketProducts, setBasketProducts }}
      >
        <Products />
      </ShoppingBasketContext.Provider>
    </StatusContext.Provider>
  );
}
