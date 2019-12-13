import styled from '@emotion/styled'

export const UserPageSt = styled.main`
  min-height: 80vh;
  background-color: #1E1E1E;
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-rows: 200px auto;
  color: white;
  padding: 15px 0;
  gap: 15px;
  .userInfo {
    display: grid;
    width: 90%;
    justify-self: center;
    grid-column: 1/3;
    grid-template-columns: auto 1fr;  
    gap: 15px;
    .wrapper {
      display: grid;
      grid-auto-columns: auto;
      grid-auto-flow: column;
      gap: 15px;
      .admRole {
      color: red;
      }
      label{
          width: 100%;
          text-align: left;
          margin: 0;
          display: grid;
          color: white;
          grid-column: 1;
        }
        input{
          color: black;
          padding: 0 5px 0 5px;
          grid-column: 2;
          border: none;
          p{
            margin: 0px;
          }
        }
        input::placeholder{
          color: black;
        }
    }
    .editMode {
      display: grid;
      justify-content: right;
      svg {
        height: 40px;
      }
    }
  }
  .stat {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
  }
  .articles {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    display: grid;
    .userCard {
      svg {
        width: 15px;
      }
    }
  }
`
