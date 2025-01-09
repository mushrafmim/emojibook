import EmojiStory from "../models/EmojiStory.js"
import { Story } from "../server.js"

export default class StoryController {
    static async getStories(req, res) {
        const stories = await EmojiStory.findAll()

        res.json(stories)
    }

    static async createStory(req, res) {
        const story = new Story({
            emojiSequence: req.body.emojiSequence,
            translation: req.body.translation,
            authorNickname: req.body.authorNickname,
            likes: 0,
            createdAt: new Date()
        })

        await story.save()

        res.json({ message: " tory created successfully" })
    }
}