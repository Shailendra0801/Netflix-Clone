import React, {useState, useContext} from "react";
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from '../containers/header';
import { FooterContainer} from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    // Check form input elements are valid...
    // Email & Password
    const isInvalid = password === "" || emailAddress === "";
    const handelSignIn = (event) => {
        event.preventDefault();

        // Firebase work here!
        firebase
            .auth()
            .signInwithEmailAndPassword(emailAddress, password)
            .then(() => {
                // push to the browse page
                history.push(ROUTES.BROWSE); //3:59:02 pr jake firebase m signin auth on krna h
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In...</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handelSignIn} method="POST">
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />

                        <Form.Input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <Form.Submit disabeled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix<Form.Link to='/signup'>Sign up now.</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}