import React, { useState, useEffect } from "react"
import TopArticles from "./GeneralPage/TopArticles"
import MoreNews from './GeneralPage/MoreNews'
import axios from 'axios'

const GeneralPage = () => {
  const [articles, setArticles] = useState(null)
  const topArticles = [
    {id: 1,urlImg: "grgrgr",title: "rretertret"},{id: 2,urlImg: "grgrgr",title: "rretertret"},{id: 3,urlImg: "grgrgr",title: "rretertret"},{id: 4,urlImg: "grgrgr",title: "rretertret"},{id: 5,urlImg: "grgrgr",title: "rretertret"},{id: 6,urlImg: "grgrgr",title: "rretertret"},
  ];

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles')
      setArticles(res.data)
    })()
  }, [])

  return (
    <main>
      <div className="top-articles-block">
        {topArticles.map(topArticle => (<TopArticles key={topArticle.id} article={topArticle} />))}
      </div>
      {articles
        ? <MoreNews articles={articles} />
        : 'Loading...'
      }
    </main>
  )
}

export default GeneralPage