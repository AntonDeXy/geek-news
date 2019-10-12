import React from "react"
import img from "../../static/code.jpg"
import Link from "next/link"
import ReactHtmlParser from 'react-html-parser';
import { GeneralNewSt, Img, ArticleDesc, HR, H2, Span } from "../elements/Main-styled";
import Loader from '../common/Loader';

const GeneralNew = ({ article }) => {
  if (!article){
    return(
      <Loader />
    )
  }
  return (
    <Link href={`a/${article._id}`}>
      <GeneralNewSt className="GeneralNew">
        <div className='img'>
          <Img src={article.imgUrl} alt="" />
        </div>
        <ArticleDesc>
          <H2>{article.title}</H2>
          <HR />
          <Span>{ ReactHtmlParser(article.content) }</Span>
        </ArticleDesc>
      </GeneralNewSt>
    </Link>
  );
};

export default GeneralNew
