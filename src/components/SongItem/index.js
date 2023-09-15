import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {songDetails, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  const onClickedDelete = () => {
    deleteSong(id)
  }

  return (
    <li className="list-item">
      <div className="img-text">
        <img src={imageUrl} alt="track" className="img" />
        <div className="text-container">
          <p className="text">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-icon">
        <p className="text">{duration}</p>
        <button
          type="button"
          className="btn"
          onClick={onClickedDelete}
          data-testid="delete"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}
export default SongItem
