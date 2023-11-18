import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from '../components/AppContext'

interface IUserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [ userData, setUserData ] = useState<null | IUserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date()

    if(userData && id !== userData.id) {
        navigate('/')
    }

    return(
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (<Center>
                        <Spinner size='xl' color="white" />
                    </Center>
                    ) :
                    (
                        <>
                            <CardInfo mainContent={`Bem vindo(a), ${userData?.name}`}
                            content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()}  ${actualData.getHours()}:${actualData.getMinutes()}`} />
                            <CardInfo mainContent={`Seu saldo atual é de:`}
                            content={`R$ ${userData.balance}`} />
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta;