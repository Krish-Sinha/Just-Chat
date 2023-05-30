import React from "react"
import axios from "axios"

const ChatPage = () => {
	const fetchCharts = async () => {
		const data = await axios.get("/api/chat")
		console.log(data)
	}
	return <div>Chat</div>
}

export default ChatPage
