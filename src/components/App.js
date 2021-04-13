import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Player from './Player/Player'
import MusicList from './MusicList'
import '../index.css'

const App = () => {
	const [currentSongIndex, setCurrentSongIndex] = useState(0)
	const [musics, setMusics] = useState([
		{
			id: 1,
			title: "Alan Walker - Faded",
			artist: "Bishow Dai",
			src: "./musics/Alan Walker - Faded.mp3"
		},
		{
			id:2,
			title: "Alan Walker c salem ilese - Fake A Smile",
			artist: "Zyan Pandey",
			src: "./musics/Alan Walker x salem ilese - Fake A Smile (Official Music Video).mp3"
		},
		{
			id:3,
			title: "Avicii - Waiting For",
			artist: "Bishow Play",
			src: "./musics/Avicii - Waiting For Love.mp3"
		},
	])
	
	const skipForward = () => {
		if (currentSongIndex + 1 > musics.length - 1) setCurrentSongIndex(0)
		else setCurrentSongIndex(currentSongIndex + 1)
	}
	
	const skipBack = () => {
		if (currentSongIndex - 1 < 0) setCurrentSongIndex(musics.length - 1)
		else setCurrentSongIndex(currentSongIndex - 1)
	}
	
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<MusicList musics={musics} />
				</Route>
				<Route exact path="/player">
					<Player skipBack={skipBack} skipForward={skipForward} musics={musics} currentSongIndex={currentSongIndex} />
				</Route>
			</Switch>
		</Router>
	)
}

export default App