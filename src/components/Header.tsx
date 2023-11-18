
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from './AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        setIsLoggedIn(false)
        changeLocalStorage({ login: false })
        navigate('/')
    }

    return(
        <Flex backgroundColor='orange' padding='5px'>
            <Box className='header' width="100%">
                <Text fontSize='3xl'>
                    Dio Bank
                </Text>
            </Box>
            <Spacer />
            {
            isLoggedIn &&
            <Button onClick={() => logout()} colorScheme='red'>
            Sair
            </Button>
            }
            
        </Flex>
    )
}