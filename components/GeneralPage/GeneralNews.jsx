import React from "react"
import img from "../../static/code.jpg"
import Link from "next/link"
import ReactHtmlParser from 'react-html-parser';

const GeneralNew = ({ article }) => {
  if (!article.content){
    return(
      ''
    )
  }
  return (
    <Link href={`a/${article._id}`}>
      <div className="GeneralNew">
        <div className="img">
          <img src={article.imgUrl} alt="" />
        </div>
        <div className="articleDesc">
          <h2 className="title">{article.title}</h2>
          <hr />
          <span>{ ReactHtmlParser(article.content) }</span>
        </div>
      </div>
    </Link>
  );
};

export default GeneralNew
