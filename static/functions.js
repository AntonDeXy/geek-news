import axios from 'axios'

const baseUrl = `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/`

export const get = (type, articleId, success, func2) => {
  (async () => {
    const url = `${baseUrl}${type}/${articleId}`
    const res = await axios.get(
      url
    )
    success(res.data)
    func2 && func2(res.data)
  })()
}

export const edit = (article, type, articleId, success) => {
  debugger
  (async () => {
    const url = `${baseUrl}${type}/${articleId}`
    
    await axios
    .put( url,{ article } )
    .then(response => {
      if (response.status == 200) {
        success()
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  })()
}
