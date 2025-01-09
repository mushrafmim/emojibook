import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Story from './components/story'
import http from './'

function App() {
  const [stories, setStories] = useState([])

  const fetchStories = () => {
    axios.get("http://localhost:3000/")
      .then((response) => {
        setStories(response.data)
      })
  }

  useEffect(() => {
    fetchStories()
  }, [])


  return (
    <div>
      <div>
        {stories.map((story) => (
          <Story key={story._id} emojiSequence={story.emojiSequence} authorNickname={story.authorNickname} />
        ))}
      </div>
    </div>
  )
}

export default App
