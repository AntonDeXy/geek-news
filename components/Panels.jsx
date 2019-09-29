import React, { useState } from "react"
import { Route } from "react-router-dom"
import axios from "axios"
import { useRouter } from "next/router"
import RemoveArticle from './Panels/RemoveArticle';
import AddArticlePanel from './Panels/AddArticle';

const Panels = () => {
  // const router = useRouter()
  return (
    <main className="panels">
      <AddArticlePanel />
      {/* <RemoveArticle /> */}
    </main>
  )
}

export default Panels