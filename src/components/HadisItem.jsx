import React from 'react'

const HadisItem = ({id, title}) => {
  return (
    <div>
                <span>{id}</span>
                <p>{title}</p>
    </div>
  )
}

export default HadisItem