import React from 'react'

const Head = (props) => {
  return (
    <head>
      <title>{props.title || 'Title'}</title>
    </head>
  )
}

export default Head