import React from "react"
import {
	Box,
	Container,
	Text,
	Tab,
	TabPanels,
	TabPanel,
	Tabs,
	TabList,
} from "@chakra-ui/react"

const HomePage = () => {
	return (
		<Container maxW="xl">
			<Box
				d="flex"
				justifyContent="center"
				p="3"
				bg={"white"}
				w="100%"
				m="40px 0 15px 0"
				borderRadius="1g"
				borderWidth="1px">
				<Text
					fontSize="4xl"
					fontFamily="Work sans"
					color="black">
					Just Chat
				</Text>
			</Box>
			<Box
				bg="white"
				w="100%"
				p={4}
				borderRadius="1g"
				color="black"
				borderWidth="1px">
				<Tabs
					variant="soft-rounded"
					colorScheme="green">
					<TabList>
						<Tab>Login</Tab>
						<Tab>Sign Up</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<p>one!</p>
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	)
}

export default HomePage
