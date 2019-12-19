import React, { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { EditPanel, EditPanelBack } from '../adminPanel/adminPanel-styled'
import { postPhoto, create } from '../../static/functions'
import Progress from '../common/Progress'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CreateArticleModal = (props) => {
  const [article, setArticle] = useState(undefined)
  const [imgUrl, setImgUrl] = useState(undefined)
  const [selectedFile, setSelectedFile] = useState({ selectedFile: null })
  const [uploadPercentage, setUploadPercentage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [user, setUser] = useState(undefined)

  if (typeof window !== 'undefined' && user === undefined) {
    setUser(null)
    const tempData = JSON.parse(localStorage.getItem('user'))
    setUser(tempData)
    debugger
    if (!tempData) {
      debugger
      history.pushState(null, null, '/login')
      window.location.reload()
    }
    setArticle({ ...article, authorId: tempData._id, author: tempData.nickname ? tempData.nickname : tempData.email })
  }

  const fileChangedHandler = event => {
    setIsLoaded(false)
    setSelectedFile(event.target.files[0])
  }

  const uploadArticle = () => {
    create(article, 'articles', (res) => {
      history.pushState(null, null, '/user')
      window.location.reload()
    })
  }

  // useEffect(() => {
  //   if (article && article.imgUrl) {
  //     setIsLoaded(true)
  //     setImgUrl(article.imgUrl)
  //   }
  // })

  const uploadHandler = () => {
    const fd = new FormData()
    fd.append('image', selectedFile, selectedFile.name)
    console.log(fd)
    postPhoto('upload-image', fd, (res) => { setImgUrl(res); setIsLoaded(true); setArticle({ ...article, imgUrl: res }) }, (data) => { setUploadPercentage(data) })
  }

  return (
    <EditPanelBack>
      <EditPanel>
        <h3>Create article</h3>
        <FontAwesomeIcon onClick={() => { window.location.reload() }} icon={faTimes} />
        <div className='wrapper'>
          <span>Title</span>
          <input
            type="text"
            onChange={e => {
              setArticle({ ...article, title: e.target.value })
            }}
            id="name"
            value={article ? article.title : ''}
            name="title"
          />

          <span>Img</span>
          <div>
            {isLoaded &&
              <>
                <img style={{ width: '20%' }} src={imgUrl} alt="" />
                <br />
                <br />
              </>
            }
            <input className='fileLoader' type="file" onChange={fileChangedHandler} />
            <br />
            {
              isLoaded && <> <span>Loading complete</span></>
            }

            <button className='upload-button' onClick={uploadHandler}>Upload!</button>
            <br />
            {uploadPercentage !== 0 &&
              <Progress percentage={uploadPercentage} />
            }

          </div>
          <span>Category</span>
          <select
            name=""
            onChange={e => {
              setArticle({ ...article, category: e.currentTarget.value })
            }}
            value={article && article.category}
            id="category"
          >
            <option value="it">It</option>
            <option value="game">Games</option>
          </select>

          <span>Description</span>
          <Editor
            initialValue={article ? article.content : ''}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \n' +
                'alignleft aligncenter alignright alignjustify | \n' +
                'bullist numlist outdent indent | removeformat | help'
            }}
            onChange={e => {
              setArticle({ ...article, content: e.target.getContent() })
            }}
          />

        </div>
        <button onClick={() => { uploadArticle() }} type="button">
          Submit
        </button>
      </EditPanel>
    </EditPanelBack>
  )
}

CreateArticleModal.propTypes = {
  type: PropTypes.string,
  article: PropTypes.object,
  setEditedArticleData: PropTypes.func,
  disableEditMode: PropTypes.func
}
export default CreateArticleModal
