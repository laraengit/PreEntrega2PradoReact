import React from 'react'
import { Card, CardBody,Heading, Text, Stack, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import ItemCount from '../itemCount'
import { Link } from 'react-router-dom'


const Item = ({p}) => {
  return (
    
    <div>
            {/* <h2>{p.producto}</h2>
            <h4>{p.precio}</h4> */}
        <Card maxW='sm'  p='4'>
            <CardBody>
                <Image
                src={p.imagen}
                alt='Imagen ilustrativa del producto'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{p.producto}</Heading>
                <Text color='blue.600' fontSize='2xl'>
                    ${p.precio}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
                <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='pink'>
                    <Link to = {"/item/"+p.id}>
                        Ver detalle
                    </Link>
                    
                </Button>
                </ButtonGroup>
            </CardFooter> 
        </Card>
            
    </div>
    
    
  )
}

export default Item