import { EmojiStory } from "../models/EmojiStory.js"

export default class StoryController {
    static async getStories(req, res) {
        const stories = await EmojiStory.find()

        res.send(stories)
    }

    static async createStory(req, res) {

        const story = new EmojiStory({
            emojiSequence: req.body.emojiSequence,
            translation: req.body.translation,
            authorNickname: req.body.authorNickname,
            likes: 0,
            createdAt: new Date()
        })

        await story.save()

        res.json({ message: "story created successfully" })
    }

    static async rateStory(req, res) {
        const data = await EmojiStory.findById(req.params.id).exec()

        data.likes += 1

        await data.save()

        res.json({ success: true })
    }
}