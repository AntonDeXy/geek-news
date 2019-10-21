import React, { useState, useEffect } from 'react'
import { MainSt } from '../elements/Main-styled';
import { AdminPanelSt } from './adminPanel-styled';
import { get, edit } from '../../static/functions';
import AdmPanelsCard from './admPanelCard';
import EditArticle from './modal/editArticle';

const AdminPanel = () => {
  const [articles, setArticles] = useState([])
  // const [isEdit, setIsEdit] = useState(false)
  const [activeArticleId, setActiveArticleId] = useState('')
  const [activeArticle, setActiveArticle] = useState(undefined)

  useEffect(() => {
    get(
      'articles', '', (res) => { setArticles(res) }
    )
  }, [])

  const updateArticle = (id) => {
    // open modal
    // isEdit?
  }

  const activeEditMode = (id) => {
    setActiveArticleId(id)
    setActiveArticle(articles.filter(e => e._id === id))
  }

  const newArticleData = (data) => {
    debugger
  
    edit(data, 'articles', activeArticleId,
    () => {
      setActiveArticle(undefined)
      setActiveArticleId(undefined)
      get(
        'articles', '', (res) => { setArticles(res) }
      )
    })
  }
  return (
    <MainSt>
      {activeArticle && <EditArticle setEditedArticleData={(data) => {newArticleData(data)}} article={activeArticle[0]} />}
      {articles ?
        <AdminPanelSt>
          {articles.map((e) =>
            <AdmPanelsCard activeEditMode={activeEditMode}  {...e} />
          )}
        </AdminPanelSt>
        : 'loading'
      }
    </MainSt>
  )
}

export default AdminPanel