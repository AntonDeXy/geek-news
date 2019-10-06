import styled from '@emotion/styled'

export const HeaderSt = styled.header`
  display: grid;
  color: white;
  background-color: #383838;
  width: 100%;
  height: 10vh;
  justify-content: center;
`
export const WrapperSt = styled.div `
  display: grid;
  width: 90vw;
  grid-template-columns: auto 20%;
  align-items: center;
`

export const A = styled.a `
  align-self: center;
  text-decoration: none;
  color: white;
  font-family: 'Squada One', cursive;
`

export const Links = styled.div `
  display: grid;
  text-align: right;
  grid-template-columns: repeat(4, auto);
  text-align: right;
`