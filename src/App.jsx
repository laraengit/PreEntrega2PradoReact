

import React , { useEffect, useState } from 'react'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'
import Servicio from './components/Servicio'
import ComponenteMuestra from './components/ComponenteMuestra'





const App = () => {
  const getProducts = async() =>{
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()

    return data
  }
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((product)=>setProducts(product))
  })

  



  return (
    <div>
      {/* {
        products.map((prod)=>{
          return(
            <ComponenteMuestra
            price = {prod.price}
            title = {prod.title}
            />
          )

        })

      }
       */}
      <NavBar />
      <ItemListContainer greeting = {"¡Bienvenida al consultorio!"}/>
      <Servicio/>
      
      

    </div>
  )
}

export default App