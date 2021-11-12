import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Signup = () => {

    const { handleGooleSignIn } = useAuth()
    const location = useLocation();
    const history = useHistory()
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleAndRedirect = () => {
        handleGooleSignIn()
            .then(res => {
                history.push(location.state?.from || '/home')
            })

    }

    return (
        <Container>
            <Row>
                <Col className='align-self-center m-5'>
                    <h1 className='m-5'>Sign In With Google</h1>
                    <button className='m-5 btn btn-danger' onClick={handleGoogleAndRedirect}>sign in</button>
                    <p className='m-5'>Sign in. Use your Google Account.<br /> Email or phone. Forgot email? Type the text you hear or see. Not your computer? Use Guest mode to sign in privately.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;

