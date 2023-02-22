import React from 'react'

export default function SearchBar({search, setSearch, isInStock, setIsInStock}) {
  return (
    <div>
    <input type="text" placeholder="search" value={search} onChange={event=>setSearch(event.target.value)}/>
    <input
      type='checkbox'
      value={isInStock}
      onChange={event => setIsInStock(event.target.checked)}
    />
    </div>
    
  )
}
