import React, { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { EditPanel, EditPanelBack } from '../adminPanel-styled'
import { postPhoto } from '../../../static/functions'
import Progress from '../../common/Progress'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const EditArticle = (props) => {
  const [article, setArticle] = useState(props.article || null)
  const [imgUrl, setImgUrl] = useState(undefined)
  const [selectedFile, setSelectedFile] = useState({ selectedFile: null })
  const [uploadPercentage, setUploadPercentage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const fileChangedHandler = event => {
    setIsLoaded(false)
    setSelectedFile(event.target.files[0])
  }

  useEffect(() => {
    if (article && article.imgUrl) {
      setIsLoaded(true)
      setImgUrl(article.imgUrl)
    }
    if (props.type === 'Create') {
      setArticle({ ...article, authorId: props.user.userId, nickname: props.user.nickname ? props.user.nickname : props.user.email })
    }
  }, [])

  const uploadHandler = () => {
    const fd = new FormData()
    fd.append('image', selectedFile, selectedFile.name)
    console.log(fd)
    postPhoto('upload-image', fd, (res) => { setImgUrl(res); setIsLoaded(true); setArticle({ ...article, imgUrl: res }) }, (data) => { setUploadPercentage(data) })
  }

  return (
    <EditPanelBack>
      <EditPanel>
        <h3> {props.type} article</h3>
        <FontAwesomeIcon onClick={() => { props.disableEditMode() }} icon={faTimes} />
        <div className='wrapper'>

          {article && article._id &&
            <>
              <span>Article id</span>
              <input
                type="text"
                value={article._id}
              />
            </>
          }
          <span>Title</span>
          <input
            type="text"
            onChange={e => setArticle({ ...article, title: e.target.value })}
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
          {
            article && article.isChecked !== undefined &&
            <>
              <span>
                Is Moderated
              </span>
              <div>
                <label>
                True
                  <input
                    type="radio"
                    name='isChecked'
                    onChange={ e => {
                      setArticle({ ...article, isChecked: true, editDate: Date() })
                    }
                    }
                    checked={article.isChecked}
                    value='true'/>
                </label>
                <br/>
                <label>
                False
                  <input
                    type="radio"
                    name='isChecked'
                    value='false'
                    onChange={ e =>
                      setArticle({ ...article, isChecked: false })
                    }
                    checked={!article.isChecked}
                  />
                </label>
              </div>
            </>
          }
        </div>
        <button onClick={() => { setArticle(delete article._id); props.setEditedArticleData(article) }} type="button">
          Submit
        </button>
      </EditPanel>
    </EditPanelBack>
  )
}

EditArticle.propTypes = {
  type: PropTypes.string,
  article: PropTypes.object,
  setEditedArticleData: PropTypes.func,
  disableEditMode: PropTypes.func,
  user: PropTypes.object
}
export default EditArticle
