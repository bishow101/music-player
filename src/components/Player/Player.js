import { useRef, useEffect, useState } from 'react'
import Thumbnail from './Thumbnail'
import PlayInfo from './PlayInfo'
import Controller from './Controller'
import './index.css'


const Player = ({ musics, currentSongIndex, nextSongIndex, skipForward, skipBack }) => {
	const [playing, setPlaying] = useState(false)
	const audioEl = useRef(null)
	
	useEffect(() => {
		const audioPromise = audioEl.current.play()
		if (playing) {
		} else if (audioPromise !== undefined) audioPromise.then(() => audioEl.current.pause())
	}, [playing, currentSongIndex])
	
	useEffect(() => {
		audioEl.current.addEventListener("ended", (event) => {
			skipForward()
		})
	})
	
	return (
		<div className="player">
			<audio ref={audioEl} src={musics[currentSongIndex].src} />
			<Thumbnail />
			<PlayInfo audioEl={audioEl} />
			{musics[currentSongIndex].title.length > 20  && playing ? <marquee><h3 className="title">{musics[currentSongIndex].title}</h3></marquee> : <h3 className="title title-stop">{musics[currentSongIndex].title}</h3>}
			<p className="artist">{musics[currentSongIndex].artist}</p>
			<Controller skipForward={skipForward} skipBack={skipBack} playing={playing} setPlaying={setPlaying} song={musics[currentSongIndex]}  />
		</div>
	)
}

export default Player         