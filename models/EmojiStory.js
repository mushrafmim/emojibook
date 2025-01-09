import mongoose from "mongoose"

export const EmojiStorySchema = mongoose.Schema({
    emojiSequence: [String],
    translation: String,
    authorNickname: String,
    likes: Number,
    createdAt: Date
})

export const EmojiStory = mongoose.model("EmojiStory", EmojiStorySchema)
