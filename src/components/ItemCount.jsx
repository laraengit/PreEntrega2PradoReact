import{useState} from 'react'
import { Button, Badge, useToast } from '@chakra-ui/react'


const ItemCount = () => {
    
    const [count,setCount] = useState(0)
    const toast = useToast()

    const addToCart = ()=>{
        toast({
            title: 'Producto agregado',
            description: `${count} productos agregados`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }



  return (
    <div>
        <Button colorScheme='teal' variant='outline' onClick ={()=>setCount(count+1)}>
            +
        </Button>
        <Badge colorScheme='green'>{count}</Badge>
        <Button colorScheme='teal' variant='outline' onClick ={()=>setCount(count-1)}>
            -
        </Button>

        <Button colorScheme='cyan' onClick ={addToCart}>Solicitar</Button>
    </div>
  )
}

export default ItemCount