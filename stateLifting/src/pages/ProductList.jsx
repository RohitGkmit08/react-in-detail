
const ProductList = ({filteredProduct}) => {
  
  return (
    <div>
      {
        filteredProduct.length === 0 ? 
        <h2>No products found</h2> : 
        filteredProduct.map((product) => (
          <div>
            {product.name}
          </div>
        ))
      }
    </div>
  )
}

export default ProductList;