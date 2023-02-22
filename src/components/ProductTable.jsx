import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({products}) {
  return (
    
        <table>
            <thead>
                <td>
                    <th>Name</th>
                </td>
                <td>
                <th>Price</th>
                </td>
            </thead>
            <tbody>
                {products.map(product =>{
                    return <ProductRow product={product} key={product.id}/>
                })}
            </tbody>
        </table>
   
  )
}
