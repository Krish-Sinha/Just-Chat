import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	VStack,
} from "@chakra-ui/react"
import React, { useState } from "react"

const SignUp = () => {
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [confirmpassword, setConfirmpassword] = useState()
	const [password, setPassword] = useState()
	const [pic, setPic] = useState()
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

			<InputGroup>
				<FormControl
					id="password"
					isRequired>
					<FormLabel>Password</FormLabel>
					<Input
						type={"password"}
						placeholder="Enter Your Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormControl>
			</InputGroup>
		</VStack>
	)
}

export default SignUp
