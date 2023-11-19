import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailList = ({productos}) => {
  return (
    <div>
        {
            productos.map((p)=>{
                return(
                    <ItemDetail p = {p}/>
                )
            })
        }
    </div>
  )
}

export default ItemDetailList