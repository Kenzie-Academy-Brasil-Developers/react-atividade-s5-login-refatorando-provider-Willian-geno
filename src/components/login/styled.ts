import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const CardLogin =  styled.div`
  width: 350px;
  height: 360px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px;
  background-color: #00356B;
  form{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  input{
    width: 300px;
    height: 40px;
    border: 1.5px solid;
    border-radius: 5px;
    box-shadow: 3px 3px 4px 0px ;
    font-size: 20px;

  }

  button{
    width: 300px;
    height: 40px;
    border: 1.5px solid;
    border-radius: 5px;
    box-shadow: 3px 3px 4px 0px ;
    font-size: 20px;
    :active{
      background-color: #00356B;
      color: white;
    }
  }

  div{
    display: flex;
    flex-direction: column;

    label{
      font-size: 25px;
      margin: 0 0 5px 0;
    }
  }
`