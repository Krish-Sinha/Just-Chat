const mongoose = require("mongoose")
const messageModel = mongoose.Schema({
	sender: { type: mongoose.Schema.Types.ObjectID },
	content: { type: String, trim: true },
	chat: { type: mongoose.Schema.Types.ObjectID, ref: "Chat" },
})
