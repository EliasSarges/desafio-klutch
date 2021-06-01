import React, { useState } from "react";
import Products from "./src/screens/Products";

import StatusContext from "./src/contexts/StatusContext";
import ShoppingBasketContext from "./src/contexts/ShoppingBasketContext";
import SearchContext from "./src/contexts/SearchContext";

export default function App() {
  const [status, setStatus] = useState(false);
  const [basketProducts, setBasketProducts] = useState([]);
  const [search, setSearchState] = useState("");

  return (
    // context responsavel pela abertura e fechamento da cesta
    <StatusContext.Provider value={{ status, setStatus }}>
      {/* context responsavel pela busca de itens */}
      <SearchContext.Provider value={{ search, setSearchState }}>
        {/* context responsavel pela lista de itens na cesta */}
        <ShoppingBasketContext.Provider
          value={{ basketProducts, setBasketProducts }}
        >
          <Products />
        </ShoppingBasketContext.Provider>
      </SearchContext.Provider>
    </StatusContext.Provider>
  );
}
