import styled  from 'styled-components'


export const RegisterContainer = styled.div `
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin-top : 20px;
` 
export const  ButtonContainer = styled(RegisterContainer) `
    flex-direction : row;
    justify-content : space-around;
`
export const Form = styled(RegisterContainer) `
    margin : auto;
    
`

export const  Head = styled.h1 `
    font-size: 35px;
    text-align : center;
    font-weight : bold ;
`
export const Input = styled.input `
    width : 400px;
    height : 50px;
    border-radius : 10px;
    text-align : center;
    font-size: 19px;
    color : #444;
    margin : 20px;
    outline : none ;
    border : 1Px solid gray;
`
export const Button = styled.button `
    border: none;
    padding: 15px 25px;
    color: white;
    background-color: rgb(255, 25, 63);
    font-size: 19px;
    margin-top: 10px;
    border-radius: 10px;
    cursor: pointer;
    margin-left : 10px;
`