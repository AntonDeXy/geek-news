import React from "react";
import img from "../../static/code.jpg";
import Link from "next/link";

const TopArticles = () => {
  return (
    <Link href="#">
      <a className="article-link">
        <img className="article" src={img} alt="" />
      </a>
    </Link>
  );
};

export default TopArticles;
