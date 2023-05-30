import React from "react"
import { Box, Container, Text } from "@chakra-ui/react"

const HomePage = () => {
	return (
		<Container maxW="x1">
			<Box
				d="flex"
				justifyContent="center"
				p={3}
				bg={"white"}
				w="100%"
				m="40px 0 15px 0"
				borderRadius="1g"
				borderWidth="1px">
				<Text>Just Chat</Text>
			</Box>
			<Box></Box>
		</Container>
	)
}

export default HomePage
