import React from "react"
import TopArticles from "./GeneralPage/TopArticles"
import MoreNews from './GeneralPage/MoreNews';

const Main = () => {
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
      <MoreNews />
    </main>
  );
};

export default Main
