import React from "react"
import GeneralNew from './GeneralNews';

const MoreNews = () => {
  return(
    <>
    <div className="moreNews">
      <h3>Больше новостей</h3>
      <hr className="more-news-line"/>
    </div>
    <div className="generalNews">
      <GeneralNew />
      <GeneralNew />
    </div>
    </>
  )
}

export default MoreNews
