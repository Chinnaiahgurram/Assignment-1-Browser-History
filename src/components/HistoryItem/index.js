import React from 'react'

import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const handleDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="listItems">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button onClick={handleDelete} data-testid="delete" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="button"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
