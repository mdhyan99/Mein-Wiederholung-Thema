import React, { useContext } from 'react'
import FavoriteContext from '../context/FavoriteContext'
import data from '../data/Products.json'
import ProductCard from './ProductCard'
const FavoriteProduct = () => {
    const {favorite} =useContext(FavoriteContext)
    const data_Fav = data.filter((item)=> favorite.includes(item.id))

  return (
    <div>
{ data_Fav.map((item)=>{
    return(
        <ProductCard item={item} />
    )
})}

    </div>
  )
}

export default FavoriteProduct