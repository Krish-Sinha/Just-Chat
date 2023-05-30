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
import { useToast } from "@chakra-ui/react"

const SignUp = () => {
	const [show, setShow] = useState(false)
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [confirmpassword, setConfirmpassword] = useState()
	const [password, setPassword] = useState()
	const [pic, setPic] = useState()
	const toast = useToast()

	const handleClick = () => setShow(!show)
	const postDetails = (pics) => {
		setLoading(true)
		if (pic === undefined) {
			toast({
				title: "Please select an Image",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			})
		}
	}
	const submitHandler = () => {}
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
				<FormLabel>Password</FormLabel>
				<InputGroup>
					<Input
						type={show ? "text" : "password"}
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
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
			<FormControl
				id="password"
				isRequired>
				<FormLabel>Confirm Password</FormLabel>
				<InputGroup>
					<Input
						type={show ? "text" : "password"}
						placeholder="Confirm Password"
						onChange={(e) => setConfirmpassword(e.target.value)}
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
			<FormControl id="pic">
				<FormLabel>Upload your picture</FormLabel>
				<Input
					type="file"
					p={0.5}
					accept="image/*"
					onChange={(e) => postDetails(e.target.files[0])}
				/>
			</FormControl>
			<Button
				colorScheme="blue"
				width="100%"
				style={{ marginTop: 15 }}
				onClick={submitHandler}>
				Sign Up
			</Button>
		</VStack>
	)
}

export default SignUp