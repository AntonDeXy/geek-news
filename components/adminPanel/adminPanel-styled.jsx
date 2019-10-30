import styled from '@emotion/styled'

export const AdminPanelSt = styled.div`
  display: grid;
  color: white;
  width: 90%;
  min-height: 10vh;
  justify-content: center;
  justify-self: center;
  grid-template-columns: 100%;
  gap: 15px;
`

export const AdmCardSt = styled.div`
  background-color: #383838;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 17% 10% 18% 35% 5%;
  gap: 15px;
  img {
    width: 100%;
  }
` 

export const EditPanel = styled.div`
  padding: 15px;
  display: grid;
  background-color: grey;
  position: absolute;
  justify-self: center;
  align-self: center;
  width: 80%;
  height: 80%;
  grid-template-columns: auto 30px;
  img {
    width: 100%;
  }
`