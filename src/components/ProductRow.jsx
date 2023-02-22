import React from 'react'

export default function ProductRow({product}) {
  return (
    <tr>
        {product.inStock? <td>{product.name}</td>: <td style={{"color": "red"}}>{product.name}</td>}
        <td>{product.price}</td>
    </tr>
  )
}
