import { useRef } from 'react'
import { ReactComponent as PlayIcon } from '../../icons/play.svg'
import { ReactComponent as PauseIcon } from '../../icons/pause.svg'
import { ReactComponent as SkipForwardIcon } from '../../icons/skip-forward.svg'
import { ReactComponent as SkipBackIcon } from '../../icons/skip-back.svg'
import { ReactComponent as ShuffleIcon } from '../../icons/shuffle.svg'
import { ReactComponent as RepeatIcon } from '../../icons/repeat.svg'
import { ReactComponent as MoreIcon } from '../../icons/more-vertical.svg'

const Controller= ({ pullDown, playing, setPlaying, skipBack, skipForward }) => {
	const playPause = useRef(null)
	
	return (
		<>
		<div className="controller">
			<RepeatIcon />
			<SkipBackIcon onClick={skipBack} />
			<div ref={playPause} onClick={(e) => {
				setPlaying(!playing)
				playPause.current.classList.add("clicked")
				setTimeout(function() {
					playPause.current.classList.remove("clicked")
				}, 300)
				}} className="play-pause">
				{playing ? <PauseIcon /> : <PlayIcon />}
			</div>
			<SkipForwardIcon onClick={skipForward} />
			<ShuffleIcon />
		</div>
		<MoreControlls pullDown={pullDown} />
		</>
	)
}

const MoreControlls = ({ pullDown }) => {
	return (
		<div className="back">
			<MoreIcon  onClick={() => pullDown(3) } />
		</div>
	)
}

export default Controller