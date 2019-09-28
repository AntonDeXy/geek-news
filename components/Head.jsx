import React from 'react'

const Head = (props) => {
  return (
    <head>
      <script src="https://cdn.tiny.cloud/1/ufqbt7ri9ur47jkvumma3hg1hi9q1z8dxlu4ez48ehj6ljco/tinymce/5/tinymce.min.js"></script> 
      <title>{props.title || 'Title'}</title>
    </head>
  )
}

export default Head