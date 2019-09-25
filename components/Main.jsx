import React,  { useState, useEffect } from "react"
import TopArticles from "./GeneralPage/TopArticles"
import MoreNews from './GeneralPage/MoreNews';
import axios from 'axios'

const Main = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles')

      console.log(res.data)

      setArticles(res.data)
    })()
  }, [])

  return (
    <main>
      <div class="top-articles-block">
        <TopArticles />
        <TopArticles />
        <TopArticles />
        <TopArticles />
        <TopArticles />
        <TopArticles />
        <TopArticles />
        <TopArticles />
        <TopArticles />
        <TopArticles />
      </div>
      {articles
        ? <MoreNews articles={articles} />
        : 'Loading...'
      }
    </main>
  );
};

export default Main