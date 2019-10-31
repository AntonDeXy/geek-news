import styled from '@emotion/styled'

export const MainSt = styled.main `
  display: grid;
  padding: 15px 0;
  width: 100%;
  background-color: #1E1E1E;
  min-height: 80vh;
`

export const MainGeneralPageSt = styled.main `
  display: grid;
  padding: 15px 0;
  grid-template-rows: auto auto;
  width: 100%;
  background-color: #1E1E1E;
  min-height: 80vh;
`

export const TopArticlesBlockSt = styled.div `
  @media(max-width: 1200px) {
    grid-template-columns: repeat(3, auto) !important;
  }
  @media(max-width: 768px) {
    grid-template-columns: repeat(2, auto) !important;
  }
  @media(max-width: 540px) {
    grid-template-columns: auto !important;
  }
  display: grid;
  justify-self: center;
  width: 95%;
  height: auto;
  grid-template-columns: repeat(6, auto);
  gap: 10px;
`
export const Img = styled.img `
  width: 100%;
  color: white;
  display: grid;
  align-content: center;
  justify-content: center;
`
export const ArticleLink = styled.a `
  color: white;
  text-decoration: none;
`

export const MoreNewsSt = styled.div `
  justify-self: center;
  display: inline-block;
  width: auto;
  text-align: center;
  color: white;
  font-family: 'Squada One', cursive;
`
export const GeneralNews = styled.div `
  justify-self: center;
  width: 85%;
  display: grid;
  gap: 10px;
  grid-template-rows: 1fr;
  .readMore {
    display: inline-block;
    color: white;
    background-color: red;
    position: relative;
    bottom: 30px;
    left: 89%;
    width: 100px;
    text-align: center;
  }
  .readMore:hover {
    cursor: pointer;
  }
`

export const GeneralNewSt = styled.div `
  display: grid;
  grid-template-columns: 25% auto;
  column-gap: 20px;
  /* max-height: 200px; */
  overflow: hidden;
  .img {
    display: grid;
    background-color: #312f2f;
  }
`
export const ArticleDesc = styled.div `
  background-color: #393939;
  padding: 10px;
  /* overflow-y: scroll; */
`

export const H2 = styled.h2 `
  margin: 0;
  font-family: 'Squada One', cursive;
  color: white;
  margin-left: 10px;
`

export const HR = styled.hr `
  height: 2px;
  background-color: white;
`
export const Span = styled.span `
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin-left: 10px; 
  display: block;
  overflow-y: scroll;
  max-height: 180px;
`

export const ArticleSt = styled.div `
  width: 90%;
  justify-self: center;
  display: grid;
  gap: 20px;
  grid-template-columns: 25% auto;
`

export const ArticleInfo = styled.div `
  color: white;
  font-family: 'Fira Sans Condensed', sans-serif;
  div {
    /* height: 100%; */
  }
`

export const OtherInf = styled.div `
  margin-bottom: 10px;
  span {
    display: block
  }
`
export const AddArticleSt = styled.div `
  width: 90%;
  justify-self: center;
  text-align: right;
  color: white;
  font-family: 'Fira Sans Condensed', sans-serif;
  span {
    transition: all.6s ease;
  }
  span:hover {
    color: red;
  }
`