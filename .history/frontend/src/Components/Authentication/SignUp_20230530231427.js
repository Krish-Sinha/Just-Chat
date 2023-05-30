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
import axios from "axios"

const SignUp = () => {
	const [show, setShow] = useState(false)
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [confirmpassword, setConfirmpassword] = useState()
	const [password, setPassword] = useState()
	const [pic, setPic] = useState()
	const [loading, setLoading] = useState(false)
	const toast = useToast()

	const handleClick = () => setShow(!show)
	const postDetails = (pics) => {
		setLoading(true)
		if (pics === undefined) {
			toast({
				title: "Please select an Image",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			})
			return
		}

		if (pics.type === "image/jpeg" || pics.type === "image/png") {
			const data = new FormData()
			data.append("file", pics)
			data.append("upload_preset", "just-chat")
			data.append("cloud_name", "dy2c1pebl")
			fetch("https://api.cloudinary.com/v1_1/dy2c1pebl", {
				method: "post",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {
					setPic(data.url.toString())
					setLoading(false)
				})
				.catch((err) => {
					console.log(err)
					setLoading(false)
				})
		} else {
			toast({
				title: "Please select an Image",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			})
			setLoading(false)
			return
		}
		if (password != confirmpassword) {
			toast({
				title: "Please select an Image",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			})
			return
		}
	}
	const submitHandler = async () => {
		setLoading(true)
		if (!anme || !email || !password || !confirmPassword) {
			toast({
				title: "Please fill al the fields",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			})
			setLoading(false)
			return
		}
	}
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
				onClick={submitHandler}
				isLoading={loading}>
				Sign Up
			</Button>
		</VStack>
	)
}

export default SignUp
