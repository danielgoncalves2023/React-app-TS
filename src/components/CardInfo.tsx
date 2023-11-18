import { Box, Text } from "@chakra-ui/react";

interface iCardInfo {
    mainContent: string,
    content: string
}

const CardInfo = ({ mainContent, content }: iCardInfo) => {
    return (
        <Box backgroundColor='white' width={320} minH='120px' padding={8} borderRadius='25px'>
            <Text fontSize='2xl' fontWeight='bold'>
                { mainContent }
            </Text>
            <Text fontSize='xl'>
                { content }
            </Text>
        </Box>
    )
}

export default CardInfo;