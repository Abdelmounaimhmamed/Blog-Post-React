import React from 'react'
import { Button, ButtonContainer, Form, Head, Input, LoginContainer } from './Login.styled';
import {Link} from "react-router-dom"
function Login() {
  return (
    <LoginContainer>
        <Head>Login</Head>
        <Form action="" method="">
            <Input type="email" name='email' id = "email" placeholder='Email ...'required={true}/>
            <Input type="password" name='password' id = "password" placeholder='password ...'required={true}/>
            <ButtonContainer>
            <Button type="submit" >Login</Button>
            <Button type="submit" ><a href="/Register" style={{color : "white"}}>Register</a></Button>
            </ButtonContainer>
        </Form>
    </LoginContainer>
  )
}

export default Login;