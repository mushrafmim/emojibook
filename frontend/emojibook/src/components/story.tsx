import axios from "axios"

export default function Story(props) {

    const handlePostLike = () => {
        axios.put("http://localhost:3000/", {
            id: props._id
        })
            .then((response) => {
                console.log(response)
            })
    }

    return (
        <div>
            <div>{props.emojiSequence}</div>
            <div>{props.authorNickname}</div>
            <button onClick={handlePostLike}>Like</button>
        </div>
    )
}