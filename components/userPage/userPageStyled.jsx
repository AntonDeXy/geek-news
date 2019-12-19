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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: row;
    gap: 15px;
    .userCard {
      display: grid;
      grid-template-rows: auto 1fr 1fr;
      border-radius: 10px;
      background-color: #383838;
      transition: all 0.5s;
      .title {
        font-size: 15px;
        padding: 0 5px;
      }
      img {
        transition: all 0.5s;
        border-radius: 10px 10px 0 0;
        width: 100%;
        box-shadow: 0 5px 5px black;
      }
      svg {
        width: 15px;
        margin-right: 5px;
      }
      .otherInfo {
        padding: 0 5px;
      }
      .onModeration {
        background-color: yellow;
        color: black;
        border-radius: 0 0 10px 10px;
        padding: 0 5px;
      }
    }
    .userCard:hover {
      box-shadow: 0 0 10px white;
      img {
        box-shadow: 0 0 0 black;
      }
    }
  }
`
