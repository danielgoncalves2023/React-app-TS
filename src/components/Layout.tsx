import { Box, ChakraProvider } from "@chakra-ui/react";
import { Header } from "./Header";

export const Layout = ({ children}: any) => {
    return(
        <ChakraProvider>
            <Header />
                <Box minHeight='100vh' width='100%' backgroundColor='#9413dc'>
                    { children }
                </Box>    
        </ChakraProvider>
    );
}

export default Layout;