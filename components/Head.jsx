import React from 'react'
import Head from 'next/head'
import { PropTypes } from 'prop-types'

const HeadComp = (props) => {
  return (
    <Head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      <link href={'https://fonts.googleapis.com/css?family=Bree+Serif&display=swap'} rel="stylesheet"/>
      <link href={'https://fonts.googleapis.com/css?family=Ubuntu&display=swap' }rel="stylesheet"/>
      <link rel="stylesheet" href="../static/style/bluePrints.css"/>
      <title>{props.title || 'Title'}</title>
    </Head>
  )
}

HeadComp.propTypes = {
  title: PropTypes.string
}

export default HeadComp
