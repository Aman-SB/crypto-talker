import React from "react";
import "./styles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LinkedinIcon, WhatsappShareButton } from "react-share";
import conf from "../../conf";
import Button from "../Button";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div id="footer" className="footer-wrapper">
            <h1 className="heading">CryptoTalker.</h1>
            <div className="socials">
                <Link to={conf.instagramURl}>
                    <InstagramIcon className="socialIcons" />
                </Link>
                <Link to={conf.lindinURl}>
                    <LinkedinIcon className="socialIcons" />
                </Link>
                <Link to={conf.twitterUrl}>
                    <TwitterIcon className="socialIcons" />
                </Link>
                <Link to="mailto: bishtaman60@gmail.com">
                    <EmailIcon className="socialIcons" />
                </Link>
                <WhatsappShareButton url={conf.appUrl}>
                    <Button text={"Share"} outlined={true} />
                </WhatsappShareButton>
            </div>
        </div>
    );
}

export default Footer;
