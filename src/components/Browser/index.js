import './index.css'

const Browser = props => {
  const {browserItem, Delete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserItem

  const onDelete = () => {
    Delete(id)
  }

  return (
    <li className="list">
      <div className="listInItems">
        <p className="time">{timeAccessed}</p>
        <img className="app" src={logoUrl} alt="domain logo" />
        <p className="appName">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        className="btn pointer"
        testid="delete"
        type="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default Browser
