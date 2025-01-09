import mongoose, { model } from "mongoose"

export const EmojiStorySchema = mongoose.Schema({
    emojiSequence: [String],
    translation: String,
    authorNickname: String,
    likes: Number,
    createdAt: Date
})

// const EmojiStory = model('EmojiStory', EmojiStorySchema)