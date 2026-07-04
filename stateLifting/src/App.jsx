import SearchBar from "./pages/SearchBar"
import ProductList from "./pages/ProductList"
import { useState } from "react"

const App = () => {
  const [searchText, setSearchText] = useState("");

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Laptop Bag" },
    { id: 4, name: "Headphones" },
    { id: 5, name: "Laptop Stand" }
  ]
  const filteredProduct = products.filter((product) => 
    product.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div>
      <h2>
        Product search
      </h2>

      <SearchBar searchText={searchText} setSearchText={setSearchText}/>

      <ProductList filteredProduct={filteredProduct}/>

    </div>
  )
}

export default App;
