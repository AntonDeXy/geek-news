import styled from '@emotion/styled'

export const MainSt = styled.main `
  display: grid;
  padding: 15px 0;
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