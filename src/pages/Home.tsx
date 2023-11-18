import { ButtonClick } from "../components/ButtonClick";
import { Card } from "../components/Card";
import { Text, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    
    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if(!loggedIn){
            alert('Email Inválido')
        } else {          
            setIsLoggedIn(true)
            changeLocalStorage({ login: true })
            navigate('/conta/1')
        }
    }

    return(
        <Card>
            <Text fontWeight='500' fontSize='2rem' marginBottom='10px' textAlign='center'>
                <h1>Faça o login</h1>
            </Text>
            <form>
                <Input margin='5px 0' width='100%' padding='7px' borderRadius='7px' textAlign='left' placeholder='email' type='email'
                    value={email} onChange={(event) => setEmail(event.target.value)}/>
                <Input margin='5px 0' width='100%' padding='7px' borderRadius='7px' textAlign='left' placeholder='password' type='password'/>
            </form>
            <ButtonClick onClick={() => validateUser(email)} />
        </Card>
    )
}

export default Home;