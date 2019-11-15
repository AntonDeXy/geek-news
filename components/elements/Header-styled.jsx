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
  .logo {
    font-family: 'Bree Serif', serif;
  }
  display: grid;
  width: 90vw;
  grid-template-columns: auto 20%;
  align-items: center;
  h1:hover {
    cursor: pointer;
  }
  @media (max-width: 1500px) {
    grid-template-columns: auto 35%;
  }
  @media (max-width: 768px) {
    .logo {
      font-size: 25px;
    }
  }
`

export const A = styled.a `
  align-self: center;
  text-decoration: none;
  color: white;
  font-family: 'Bree Serif', serif;
`
