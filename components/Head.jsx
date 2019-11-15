import React from 'react'
import Head from 'next/head'
// import '../static/style/bluePrints.scss'
const HeadComp = (props) => {
  return (
    <Head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <link href={`https://fonts.googleapis.com/css?family=Bree+Serif&display=swap`} rel="stylesheet"/> 
      <link href={`https://fonts.googleapis.com/css?family=Ubuntu&display=swap` }rel="stylesheet"/> 
      <link rel="stylesheet" href="../static/style/bluePrints.css"/>
      {/* <script src="https://cdn.tiny.cloud/1/ufqbt7ri9ur47jkvumma3hg1hi9q1z8dxlu4ez48ehj6ljco/tinymce/5/tinymce.min.js"></script>  */}
      <title>{props.title || 'Title'}</title>
    </Head>
  )
}

export default HeadComp