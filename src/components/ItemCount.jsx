import{useState} from 'react'
import { Button, Badge, useToast } from '@chakra-ui/react'
import useCounter from '../hooks/useCounter'


const ItemCount = () => {
    
    /* const [count,setCount] = useState(0) */

    const {count, increment, decrement} = useCounter(0,1)
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
        <Button colorScheme='teal' variant='outline' onClick ={increment}>
            +
        </Button>
        <Badge colorScheme='green'>{count}</Badge>
        <Button colorScheme='teal' variant='outline' onClick ={decrement}>
            -
        </Button>

        <Button colorScheme='cyan' onClick ={addToCart}>Solicitar</Button>
    </div>
  )
}

export default ItemCount