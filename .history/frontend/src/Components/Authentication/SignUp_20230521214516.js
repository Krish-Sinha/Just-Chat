import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react"
import React, { useState } from "react"

const SignUp = () => {
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [confirmpassword, setConfirmpassword] = useState()
	const [password, setPassword] = useState()
	const [pic, setPic] = useState()
	return (
		<VStack>
			<FormControl>
				<FormLabel>
					<Input
						placeholder="Enter Your Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</FormLabel>
			</FormControl>
		</VStack>
	)
}

export default SignUp
