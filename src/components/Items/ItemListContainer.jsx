import React from 'react'
import ItemCount from '../itemCount'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  const productos = [
    {id:1, producto: "Crema humectante", descripcion: "", precio: 10000, categoria: "500ml"},
    {id:3, producto: "Exfoliante", descripcion: "", precio: 10000, categoria: "500ml"},
    {id:5, producto: "Gel de ducha", descripcion: "", precio: 10000, categoria: "500ml"},

  ]

  const mostrarProductos = new Promise((resolve, reject) =>{
    if(productos.length >0) {
      setTimeout(()=>{
        resolve(productos)
      },5000)

    }else{
      reject("paso")
    }
  })

  mostrarProductos
    .then((resultado)=>{
      console.log(resultado)

    })
    .catch((error)=>{
      console.log(error)

    })


  const aplicarDescuento = new Promise((resolve,reject)=>{
    const descuento = true
    if(descuento){
      resolve("Descuento aplicado")
    }else{
      reject("No se pudo aplicar el decuento")
    }
  })
  /* aplicarDescuento
    .then((resultado)=>{
      console.log(resultado)
    })

    .catch((error)=>{
      console.log(error)
    })
 */
    
  return (
    <div>
        <h1>Productos</h1>
        <ItemList productos = {productos}/>
    </div>
    
  )
}

export default ItemListContainer