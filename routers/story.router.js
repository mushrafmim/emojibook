import { Router } from "express"
import StoryController from "../controllers/story.controller.js"

var router = new Router()

router.route("/story")
    .get(StoryController.getStories)
    .post(StoryController.createStory)

router.route("/story/:id")
    .put(StoryController.rateStory)


export default router