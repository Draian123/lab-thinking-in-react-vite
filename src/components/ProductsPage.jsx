import React, {useState} from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import jsonData from '../data.json'

export default function ProductsPage() {
const [products, setProducts] = useState(jsonData);
  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar/>
        <ProductTable products={products}/>
    </div>
  )
}
