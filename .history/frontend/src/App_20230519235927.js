import "./App.css"
// import { Button } from "@chakra-ui/react"
import { Route } from "react-router-dom"

function App() {
	return (
		<div className="App">
			{/* <Button colorScheme="blue">Button</Button> */}
			<Route
				path="/"
				component={HomePage}
			/>
			{/* <Route path='/chat'/> */}
		</div>
	)
}

export default App
