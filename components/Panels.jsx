import React from 'react'
import { Route } from 'react-router-dom';

export const Panels = () => {
  return (
    <main className='panels'>
      {/* <Route path='/panels/addArticle' /> */}
      <AddArticlePanel />
    </main>
  )
}

const AddArticlePanel = () => {
  return (
    <div className='panel'>
      <div className="wrapper addArticlePanel">
        <h3>Add article</h3>
        <span>Title</span>
        <input type="text" name='title'/>
       
        <span>Category</span>
        <select name="" id="">
          <option value="it">It</option>
          <option value="game">Games</option>
        </select>
      
        <span>Description</span>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <button type='submit'>Submit</button>
      </div>
    </div>
  )
}
