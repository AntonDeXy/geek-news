import axios from 'axios'

const baseUrl = `https://cors-anywhere.herokuapp.com/geek-news-beta.herokuapp.com/`
// const baseUrl = `http://localhost:5000/`

export const get = (type, articleId, success, func2) => {
  (async () => {
    const url = `${baseUrl}${type}/${articleId}`
    console.log(url)
    const res = await axios.get(url)
    success(res.data)
    func2 && func2(res.data)
  })()
}

export const edit = (article, type, articleId, success) => {
  debugger

  const url = `${baseUrl}${type}/${articleId}`
  axios
    .put(url, { article })
    .then(response => {
      console.log(response)
      if (response.status == 200) {
        success()
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const create = (article, type, success) => {
  debugger

  const url = `${baseUrl}${type}`
  axios
    .post(url, { article })
    .then(response => {
      console.log(response)
      if (response.status == 200) {
        success()
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const removeArt = (type, articleId, success) => {
  const url = `${baseUrl}${type}/${articleId}`

  axios
    .delete(url)
    .then(response => {
      console.log(response)
      if (response.status == 200) {
        success()
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const postPhoto = (type, file, success) => {
  const url = `${baseUrl}${type}`
  
  axios
    .post(url, file)
    .then(res => {
      debugger
      console.log(res)
      success(res)
    })
    
}