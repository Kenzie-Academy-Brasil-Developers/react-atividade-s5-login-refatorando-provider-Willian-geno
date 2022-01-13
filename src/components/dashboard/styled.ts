import styled from "styled-components"

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  button{
    width: 300px;
    height: 40px;
    border: 1.5px solid;
    border-radius: 5px;
    box-shadow: 3px 3px 4px 0px #818181;
    font-size: 20px;
    :active{
      background-color: #00356B;
      color: white;
    }
  }
  
`