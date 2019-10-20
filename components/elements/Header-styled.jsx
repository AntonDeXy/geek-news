import styled from '@emotion/styled'

export const HeaderSt = styled.header`
  display: grid;
  color: white;
  background-color: #383838;
  width: 100%;
  min-height: 10vh;
  justify-content: center;
`
export const WrapperSt = styled.div `
  @media (max-width: 768px) {
    .logo {
      font-size: 25px;
    }
  }
  display: grid;
  width: 90vw;
  grid-template-columns: auto 20%;
  align-items: center;
  a:hover {
    cursor: pointer;
  }
`

export const A = styled.a `
  align-self: center;
  text-decoration: none;
  color: white;
  font-family: 'Squada One', cursive;
`