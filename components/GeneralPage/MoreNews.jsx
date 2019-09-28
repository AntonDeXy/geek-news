import React from "react"
import GeneralNew from './GeneralNews';
import Link from "next/link";

const MoreNews = (props) => {
  return (
    <>
      <div className="moreNews">
        <h3>Больше новостей</h3>
        <hr className="more-news-line" />
      </div>
      <div className="generalNews">
        {props.articles.map(article =>
          <GeneralNew key={article._id} article={article} />
        )}
      </div>
    </>
  )
}

export default MoreNews
