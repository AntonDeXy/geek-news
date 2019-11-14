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
          <Img src={article.imgUrl} alt="img not found" />
        </div>
        <ArticleDesc>
          <H2>{article.title}</H2>
          <HR />
          <Span>{ ReactHtmlParser(article.content) }</Span>
          <button href={`a/${article._id}`} type="button" class="btn btn-secondary">Read more</button>
        </ArticleDesc>
      </GeneralNewSt>
    </Link>
  );
};

export default GeneralNew
