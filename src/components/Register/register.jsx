import "./register.styled.js";
import { Button, ButtonContainer, Form, Head, Input, RegisterContainer } from './register.styled';

function Register() {
  return (
    <RegisterContainer>
        <Head>Register</Head>
        <Form action="" method="">
            <Input type="text" name='username' id = "username" placeholder='username ...'required={true}/>
            <Input type="email" name='email' id = "email" placeholder='Email ...'required={true}/>
            <Input type="password" name='password' id = "password" placeholder='password ...'required={true}/>
            <ButtonContainer>
            <Button type="submit" >Register</Button>
            <Button type="submit" > <a href="/Login" style={{color : "white"}}>Login</a></Button>
            </ButtonContainer>
        </Form>
    </RegisterContainer>
  )
}

export default Register;