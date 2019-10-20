import axios from 'axios'

const baseUrl = `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/`

export const get = (type, articleId, success, func2) => {
  debugger
  (async () => {
    const url = `${baseUrl}${type}/${articleId}`
    const res = await axios.get(
      url
    )
    success(res.data)
    func2 && func2(res.data)
  })()
}
