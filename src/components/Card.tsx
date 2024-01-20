import { Box, Center } from '@chakra-ui/react'

export const Card = ({ children }: any) => {
    return (
        <Center>
            <Box backgroundColor='#FFFFFF' borderRadius='20px' margin='20px' padding='15px' width='100%'>
                {children}
            </Box>
        </Center>
    )
}

