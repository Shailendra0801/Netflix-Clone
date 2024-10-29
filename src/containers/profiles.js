import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function SelectProfileContainer({ user, setProfile }) {
    return <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profile.User>
                    <Profile.Picture src={user.photoURL} />
                    <Profile.Name>{useReducer.displayName}</Profile.Name>
                </Profile.User>
            </Profiles.List>
        </Profiles>
    </>
}