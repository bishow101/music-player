import { useState, useRef, useEffect } from 'react'

const PlayInfo = ({ audioEl, skipForward }) => {
	const [currentMin, setCurrentMin] = useState(0)
	const [currentSec, setCurrentSec] = useState(0)
	const [durationMin, setDurationMin] = useState(0)
	const [durationSec, setDurationSec] = useState(0)
	
	const slider = useRef(null)
	const currentSlider = useRef(null)
	
	useEffect(() => {
		audioEl.current.addEventListener('timeupdate', (event) => {
		const { currentTime, duration } = event.srcElement
		setCurrentMin(Math.floor(currentTime / 60))
		setCurrentSec(Math.floor(currentTime % 60))
		setDurationMin(String(Math.floor(duration / 60)))
		setDurationSec(String(Math.floor(duration % 60)))
		
		currentSlider.current.style.setProperty("width", `${(currentTime / duration) * 100}%`)
	})
	
	slider.current.addEventListener('click', (event) => {
		const {duration} = audioEl.current
		audioEl.current.currentTime = (event.offsetX / slider.current.clientWidth) * duration
	})
	}, [])
	
	return (
		<div className="play-info">
			<p className="current-time">{ currentMin < 10 ? "0"+currentMin : currentMin }:{ currentSec < 10 ? "0"+currentSec : currentSec }</p>
			<div ref={slider} className="slider">
				<div ref={currentSlider} className="current"></div>
			</div>
			{durationMin !== "NaN" ? <p className="duration">{ durationMin < 10 ? "0"+durationMin : durationMin }:{ durationSec < 10 ? "0"+durationSec : durationSec }</p> : <p className="duration">00:00</p>}
		</div>
	)
	
}

export default PlayInfo