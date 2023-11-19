import React from 'react'
import Item from './Item'
import { Flex, Spacer } from '@chakra-ui/react'

const ItemList = ({productos}) => {
  return (
    <Flex>
        
        {productos.map((p)=>{
          return(

            <div key = {p.id} gap = "20">
              <Item p = {p} />
            </div>

              

            
            
          )
        })}
        
        
      

    </Flex>
    
  )
}

export default ItemList