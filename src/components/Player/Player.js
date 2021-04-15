import { useRef, useEffect, useState } from 'react'
import { ReactComponent as SkipForwardIcon} from '../../icons/skip-forward.svg'
import { ReactComponent as SkipBackIcon} from '../../icons/skip-back.svg'
import { ReactComponent as PauseIcon} from '../../icons/pause.svg'
import { ReactComponent as PlayIcon} from '../../icons/play.svg'
import Thumbnail from './Thumbnail'
import PlayInfo from './PlayInfo'
import Controller from './Controller'
import './index.css'


const Player = ({ play, show, pullDown, showPlayer, setShowPlayer, musics, currentSongIndex, skipForward, skipBack }) => {
	const [playing, setPlaying] = useState(false)
	const audioEl = useRef(null)
	const playerRef = useRef(null)
	
	useEffect(() => {
		if (showPlayer) {
			playerRef.current.classList.add("player-active")
			playerRef.current.classList.remove("player-hidden")
			setPlaying(play)
		}
		else {
			playerRef.current.classList.add("player-hidden")
			playerRef.current.classList.remove("player-active")
		}
	}, [showPlayer])
	
	useEffect(() => {
		if (playing) audioEl.current.play()
		else audioEl.current.pause()
	}, [playing, currentSongIndex])
	
	useEffect(() => {
		 
		audioEl.current.addEventListener("ended", (event) => {
			skipForward()
		})
	})
	
	return (
		<>
		<div ref={playerRef} className="player">
			<audio ref={audioEl} src={musics[currentSongIndex].src} />
			<Thumbnail />
			<PlayInfo audioEl={audioEl} />
			<h3 className="title">{musics[currentSongIndex].title.length > 20  && playing && <marquee><h3 className="title">{musics[currentSongIndex].title}</h3></marquee>}</h3>
			<p className="artist">{musics[currentSongIndex].artist}</p>
			<Controller pullDown={pullDown} skipForward={skipForward} skipBack={skipBack} playing={playing} setPlaying={setPlaying} song={musics[currentSongIndex]}  />
		</div> 
			{!showPlayer && <div className="player-semi-active" style={{
				position: "fixed",
				bottom: 0,
				left: 0
			}}>
			<div className="skip">
				<SkipForwardIcon />
			</div>
				<div onClick={() => show(musics[currentSongIndex].id, playing)} className="title-div">
					{ playing && musics[currentSongIndex].title.length >= 30 && <marquee><p className="title">{musics[currentSongIndex].title}</p></marquee> }
					{ musics[currentSongIndex].title.length <30 && <p className="title">{musics[currentSongIndex].title}</p> }
				</div>
				<div onClick={() => setPlaying(!playing)}>{playing ? <PauseIcon /> : <PlayIcon />}
				</div>
			</div>
			}
			</>
	)
}


export default Player         