import React from "react";
import { Footer} from "../components"

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact Us...</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Invester Relations</Footer.Link>
                    <Footer.Link href="#">Way to Watch</Footer.Link>
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Accounts</Footer.Link>
                    <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link href="#">Cooky Preferences</Footer.Link>
                    <Footer.Link href="#">Leagal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Title>Netflix Asia</Footer.Title>
        </Footer>
    )
}