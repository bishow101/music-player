import { useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Player from './Player/Player'
import MusicList from './MusicList'
import '../index.css'

const App = () => {
	const [currentSongIndex, setCurrentSongIndex] = useState(1)
	const [showPlayer, setShowPlayer] = useState(false)
	const [play, setPlay] = useState(false)
	
	const show = (id, playNow) => {
		setCurrentSongIndex(id-1)
		setShowPlayer(true)
		setPlay(playNow)
	}
	
	const pullDown = (id) => {
		setShowPlayer(false)
	}
	
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
					<>
						<MusicList show={show} musics={musics} />
						<Player show={show} play={play} setShowPlayer={setShowPlayer} pullDown={pullDown} showPlayer={showPlayer} skipBack={skipBack} skipForward={skipForward} musics={musics} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} />
					</>
				</Route>
			</Switch>
		</Router>
	)
}

export default App