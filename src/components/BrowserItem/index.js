import './index.css'

const BrowserItem = props => {
  const {browserItemDetails, onClickDeleteIcon} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserItemDetails

  const onClickDeleteIconButton = () => {
    onClickDeleteIcon(id)
  }

  return (
    <li className="browser-item-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="browser-details-container">
        <div className="browser-details">
          <img src={logoUrl} className="domain-logo" alt="domain logo" />
          <div className="title-container">
            <p className="browser-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-button-container">
          <button
            className="delete-button"
            data-testid="delete"
            onClick={onClickDeleteIconButton}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-icon"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserItem
