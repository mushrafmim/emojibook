import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import storyRouter from "./routers/story.router.js"

const app = express()

app.use(express.json())

app.use(cors())


app.use(storyRouter)

mongoose.connect("mongodb://localhost:27017/emojistory")


app.listen(3000, () => {
    console.log('listening on Port 3000')
})