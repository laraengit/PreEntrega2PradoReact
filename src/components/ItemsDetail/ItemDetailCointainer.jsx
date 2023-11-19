import React from 'react'
import ItemDetailList from './ItemDetailList'

const ItemDetailCointainer = ({productos}) => {
  return (
    <div>
        <ItemDetailList productos = {productos} />
    </div>
  )
}

export default ItemDetailCointainer