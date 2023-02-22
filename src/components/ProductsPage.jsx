import React, {useState} from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import jsonData from '../data.json'

export default function ProductsPage() {
const [products, setProducts] = useState(jsonData);
const [search,setSearch] = useState("")
const [isInStock, setIsInStock] = useState(false)
  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar search={search} setSearch={setSearch} isInStock={isInStock} setIsInStock={setIsInStock}/>
        <ProductTable products={products} search={search} isInStock={isInStock}/>
    </div>
  )
}
