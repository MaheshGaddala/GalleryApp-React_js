// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {placeDetails, updateImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = placeDetails
  const onClickImage = () => {
    updateImageId(id)
  }
  const unActiveClassName = isActive ? 'un-active-image' : ''

  return (
    <li className="list-container">
      <button className="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${unActiveClassName} `}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
