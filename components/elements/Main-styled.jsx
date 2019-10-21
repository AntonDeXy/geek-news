import styled from '@emotion/styled'

export const MainSt = styled.main `
  display: grid;
  padding: 15px 0;
  width: 100%;
  background-color: #1E1E1E;
  min-height: 80vh;
`
export const TopArticlesBlockSt = styled.div `
  display: grid;
  justify-self: center;
  width: 95%;
  grid-template-columns: repeat(5, auto);
  gap: 10px;
`
export const Img = styled.img `
  width: 100%;
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
`

export const GeneralNewSt = styled.div `
  display: grid;
  grid-template-columns: 20% auto;
  column-gap: 20px;
`

export const ArticleDesc = styled.div `
  background-color: #393939;
  padding: 10px;
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
`

export const OtherInf = styled.div `
  margin-bottom: 10px;
  span {
    display: block
  }
`


