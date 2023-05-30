import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	VStack,
} from "@chakra-ui/react"
import React, { useState } from "react"

const SignUp = () => {
	const [show, setShow] = useState(false)
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [confirmpassword, setConfirmpassword] = useState()
	const [password, setPassword] = useState()
	const [pic, setPic] = useState()

	const handleClick = () => setShow(!show)
	return (
		<VStack>
			<FormControl
				id="first-name"
				isRequired>
				<FormLabel>Name</FormLabel>
				<Input
					placeholder="Enter Your Name"
					onChange={(e) => setName(e.target.value)}
				/>
			</FormControl>
			<FormControl
				id="email"
				isRequired>
				<FormLabel>Email</FormLabel>
				<Input
					placeholder="Enter Your Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormControl>
			<FormControl
				id="password"
				isRequired>
				<InputGroup>
					<FormLabel>Password</FormLabel>
					<Input
						type={show ? "text" : "password"}
						placeholder="Enter Your Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<InputRightElement width="4.5rem">
						<Button
							h="1.75rem"
							size="sm"
							onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
		</VStack>
	)
}

export default SignUp
