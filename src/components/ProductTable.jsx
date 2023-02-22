import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({products, search, isInStock}) {
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
                {products
                .filter(product => {
                if (search === "") return products
                return product.name.toLowerCase().includes(search.toLowerCase())
                })
                .filter(product => {
                if (isInStock === false) return products
                return product.inStock === true
                })
                .map(product =>{
                    return <ProductRow product={product} key={product.id}/>
                })}
            </tbody>
        </table>
   
  )
}
