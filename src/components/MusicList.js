import { Link } from 'react-router-dom'
import { ReactComponent as MusicIcon } from '../icons/music.svg'
import { ReactComponent as OptionIcon } from '../icons/more-vertical.svg'

const MusicList = ({ show, musics, options }) => {
	return (
		<div className="music-list">
			{musics.map(music => <MusicListItem show={show} options={options} key={music.id} music={music} MusicIcon={MusicIcon} OptionIcon={OptionIcon} />)}
		</div>
	)
}

const MusicListItem = ({ show, music, options, MusicIcon, OptionIcon}) => {
	return (
		<div className="music-list-item">
			<MusicIcon className="music-icon" />
			<div onClick={e => show(music.id, true)} className="music-info">
				<h4 className="title">{music.title}</h4>
				<p className="artist">{music.artist}</p>
			</div>
			<OptionIcon id="option-icon" className="option-icon" />
		</div>
	)
}

export default MusicList