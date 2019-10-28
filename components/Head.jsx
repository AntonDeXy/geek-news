import React from 'react'
import Head from 'next/head'

const HeadComp = (props) => {
  return (
    <Head>
      {/* <script src="https://cdn.tiny.cloud/1/ufqbt7ri9ur47jkvumma3hg1hi9q1z8dxlu4ez48ehj6ljco/tinymce/5/tinymce.min.js"></script>  */}
      <title>{props.title || 'Title'}</title>
    </Head>
  )
}

export default HeadComp