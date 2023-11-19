import React from 'react'
import ItemDetailList from './ItemDetailList'
import { useParams } from 'react-router-dom'
import ItemList from '../Items/ItemList'
import ItemDetail from './ItemDetail'

const ItemDetailCointainer = () => {
    const productos2 = [
        {id:1, producto: "Crema humectante", descripcion: "", precio: 10000, categoria: "500ml", imagen : "/src/assets/humectante.jpg"},
        {id:2, producto: "Crema humectante", descripcion: "", precio: 5000, categoria: "250ml", imagen : "/src/assets/humectante.jpg"},
        {id:3, producto: "Gel de ducha", descripcion: "", precio: 10000, categoria: "500ml",imagen : "/src/assets/gelDucha.jpg"},
        {id:4, producto: "Gel de ducha", descripcion: "", precio: 5000, categoria: "250ml",imagen : "/src/assets/gelDucha.jpg"},
        {id:5, producto: "Exfoliante", descripcion: "", precio: 10000, categoria: "500ml",imagen : "/src/assets/exfoliante.jpg"},
        {id:6, producto: "Exfoliante", descripcion: "", precio: 5000, categoria: "250ml",imagen : "/src/assets/exfoliante.jpg"},
    ]
    

      let {id} = useParams()
      const p = productos2.find((p)=>p.id==id)
      console.log(id)
    return (
    <div>
        {/* <ItemDetailList productos = {productos2} /> */}
        <ItemDetail p={p}/>
    </div>
  )
}

export default ItemDetailCointainer