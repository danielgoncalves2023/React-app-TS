import { Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface IDButton {
    onClick: MouseEventHandler
}

export const ButtonClick = ({ onClick }: IDButton) => {
    return(
        <ChakraProvider>
            <ButtonGroup width='100%' marginTop='10px'>
                <Button onClick={onClick} padding='1.5rem' borderRadius='10px' colorScheme='blue' width='100%' fontSize='1.5rem'>
                    Click here
                </Button>
            </ButtonGroup>
        </ChakraProvider>
    )
}