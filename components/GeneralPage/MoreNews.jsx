import React from "react"
import GeneralNew from './GeneralNews';
import Link from "next/link";
import { MoreNewsSt, GeneralNews } from '../elements/Main-styled';

const MoreNews = (props) => {
  return (
    <>
      <MoreNewsSt>
        <h3>News</h3>
        <hr className="more-news-line" />
      </MoreNewsSt>
      <GeneralNews>
        {props.articles.map(article =>
          <GeneralNew key={article._id} article={article} />
        )}
      </GeneralNews>
    </>
  )
}

export default MoreNews
