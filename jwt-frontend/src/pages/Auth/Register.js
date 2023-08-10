
import { useState } from 'react';
import { Button, Container, FloatingLabel, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, SetEmail] = useState("");
    const [registerEnabled, setRegisterEnabled] = useState(false);
    const [error, seterror] = useState("");
    const navigate = useNavigate();
    const handleUsername = (event) => {
        setUsername(event.target.value);
        if (username.length < 5) {
            setRegisterEnabled(false);
        } else {
            setRegisterEnabled(true);
        }
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
        if (password.length <= 6) {
            setRegisterEnabled(false);
        } else {
            setRegisterEnabled(true);
        }
    }
    const handleEmail = (event) => {
        SetEmail(event.target.value);
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (regex.test(email) && email !== "") {
            setRegisterEnabled(false);
        } else {
            setRegisterEnabled(true);
        }
    }
    const handleRegister = async (event) => {
        event.preventDefault();

        const data = {
            'username': username,
            'password': password,
            'email': email,
        };


        try {
            const response = await axios.post('http://localhost:8081/auth/register', data);
            console.log(response)
            navigate("/Login")
            seterror("");
        } catch (error) {
            seterror(error.response.data.message);
        }
    }

    return (

        <>
            <Container>
                <div className='login-box shadow-sn rounded'>
                    <div className='text-center mb-4'>
                        <h1>User Register</h1>

                    </div>

                    <Form onSubmit={handleRegister}>
                        <FloatingLabel controlId='username' label="Select a Username" className='mb-3'>
                            <FormControl placeholder='Select a username' value={username} onChange={handleUsername} />
                        </FloatingLabel>
                        <FloatingLabel controlId='password' label="Select a password" className='mb-3'>
                            <FormControl type="password" placeholder='Enter password' value={password} onChange={handlePassword} />
                        </FloatingLabel>
                        <FloatingLabel controlId='email' label="Enter your Email" className='mb-3'>
                            <FormControl type="email" placeholder='Enter your Email' value={email} onChange={handleEmail} />
                        </FloatingLabel>

                        <div className='text-end'>
                            <Button type="submit" variant="primary" disabled={registerEnabled}>Register</Button>
                        </div>
                        {error &&
                            <div className='text-danger mb-3'>
                                {error}
                            </div>
                        }

                        
                    </Form>

                </div>
            </Container>
        </>
    )
}


export default Register;