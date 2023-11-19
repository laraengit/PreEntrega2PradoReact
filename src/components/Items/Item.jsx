import React from 'react'
import { Card, CardBody,Heading, Text, Stack, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import ItemCount from '../itemCount'
const Item = ({p}) => {
  return (
    
    <Flex>
        <div>
              {/* <h2>{p.producto}</h2>
              <h4>{p.precio}</h4> */}
            <Card maxW='sm'  p='4'>
                <CardBody>
                    <Image
                    src="src/assets/humectante.jpg"
                    alt='Green double couch with wooden legs'
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
                        Agregar al carrito
                    </Button>
                    </ButtonGroup>
                </CardFooter> 
            </Card>
            
    </div>
    
    </Flex>
    
  )
}

export default Item