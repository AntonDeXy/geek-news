import axios from 'axios'

const baseUrl = 'https://cors-anywhere.herokuapp.com/geek-news-back.herokuapp.com/'
// const baseUrl = 'http://localhost:5001/'

export const checkToken = (token, success) => {
  (async () => {
    const url = baseUrl + 'checktoken'
    const headers = {
      Authorization: 'Bearer ' + token
    }
    axios.get(url, { headers })
      .then(res => success(res))
  })()
}

export const get = (type, param, success, func2) => {
  (async () => {
    const url = `${baseUrl}${type}/${param}`
    const res = await axios.get(url)
    success(res.data)
    func2 && func2(res.data)
  })()
}
export const getByAuthor = (type, author, success) => {
  (async () => {
    const url = `${baseUrl}${type}/${author}`
    const res = await axios.get(url)
    success(res.data)
  })()
}
export const edit = (article, type, articleId, success) => {
  const url = `${baseUrl}${type}/${articleId}`
  axios
    .put(url, { article })
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        success()
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const create = (article, type, success) => {
  const url = `${baseUrl}${type}`
  axios
    .post(url, article)
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        success(response)
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
      if (response.status === 200) {
        success(response)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const postPhoto = (type, file, success, setUploadPercentage) => {
  const url = `${baseUrl}${type}`
  axios
    .post(url, file, {
      onUploadProgress: progressEvent => {
        setUploadPercentage(
          parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          )
        )

        // Clear percentage
        setTimeout(() => setUploadPercentage(0), 10000)
      }
    })
    .then(res => {
      console.log(res)
      success(res.data.imageUrl)
    })
}

export const auth = (data, type, success) => {
  const url = `${baseUrl}${type}`
  axios
    .post(url, data)
    .then(response => {
      // console.log(response)
      if (response.status === 200) {
        success(response.data)
      }
    })
    .catch(function (error) {
      console.log(error)
      success(error)
      // success(error.response.data.message)
    })
}

export const getUserData = (token, success) => {
  const url = `${baseUrl}api/me`
  const headers = {
    Authorization: 'Bearer ' + token
  }
  axios
    .get(url, { headers })
    .then(res => success(res))
}
