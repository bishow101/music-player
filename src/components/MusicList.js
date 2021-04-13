import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as MusicIcon } from '../icons/music.svg'
import { ReactComponent as OptionIcon } from '../icons/more-vertical.svg'

const MusicList = ({ musics, options }) => {
	return (
		<div className="music-list">
			{musics.map(music => <MusicListItem options={options} key={music.id} music={music} MusicIcon={MusicIcon} OptionIcon={OptionIcon} />)}
		</div>
	)
}

const MusicListItem = ({ music, options, MusicIcon, OptionIcon}) => {
	const [open, setOpen] = useState(false)
	
	return (
		<div className="music-list-item">
			<MusicIcon className="music-icon" />
			<Link to={{pathname: `/player`, id: music.id}} className="music-info">
				<h4 className="title">{music.title}</h4>
				<p className="artist">{music.artist}</p>
			</Link>
			<OptionIcon id="option-icon" className="option-icon" />
		</div>
	)
}

export default MusicList