import express from "express"
import StoryController from "./routers/story.router.js"
import mongoose from "mongoose"
import { EmojiStorySchema } from "./models/EmojiStory.js"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())

app.get("/", StoryController.getStories)
app.post("/", StoryController.createStory)
app.put("/{id}", StoryController.rateStory)

mongoose.connect("mongodb://localhost:27017/emojistory")

export const Story = mongoose.model("EmojiStory", EmojiStorySchema)

app.listen(3000, () => {
    console.log('listening on Port 3000')
})