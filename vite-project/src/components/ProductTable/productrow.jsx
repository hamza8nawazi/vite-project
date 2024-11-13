
function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>{product.category}</td>
      <td>{product.description}</td>
    </tr>
  );
}

export default ProductRow;
