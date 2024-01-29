import React from "react";
import "./styles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import { WhatsappShareButton } from "react-share";
import conf from "../../conf";
import Button from "../Button";
function Footer() {
    return (
        <div id="footer" className="footer-wrapper">
            <h1 className="heading">CryptoTalker.</h1>
            <div className="socials">
                <a href="www.instagram.com">
                    <InstagramIcon className="socialIcons" />
                </a>
                <a href="www.facebook.com">
                    <FacebookIcon className="socialIcons" />
                </a>
                <a href="www.twitter.com">
                    <TwitterIcon className="socialIcons" />
                </a>
                <a href="mailto: www.instagram.com">
                    <EmailIcon className="socialIcons" />
                </a>
                <WhatsappShareButton url={conf.appUrl}>
                    <Button text={"Share"} outlined={true} />
                </WhatsappShareButton>
            </div>
        </div>
    );
}

export default Footer;

