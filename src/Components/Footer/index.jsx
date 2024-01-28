import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function Footer() {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <div className="footer">
                <h2 className="logo" onClick={() => topFunction()}>
                    CryptoTracker<span>.</span>
                </h2>
                <div className="social-links">
                    <Link
                        href="github profile"
                        target="_blank"
                    >
                        <GitHubIcon className="social-link" />
                    </Link>
                    <Link href="/" target="_blank">
                        <FacebookIcon className="social-link" />
                    </Link>
                    <Link href="gmail" target="_blank">
                        <EmailIcon className="social-link" />
                    </Link>
                    <Link href="/" target="_blank">
                        <TwitterIcon className="social-link" />
                    </Link>
                    <Link
                        href="instagram"
                        target="_blank"
                    >
                        <InstagramIcon className="social-link" />
                    </Link>
                </div>
            </div>
            <div className="declaration">
                <div>
                    <p>@ All Rights reserved: CryptoTracker</p>
                </div>
                <div>
                    <p>Designed and Developed by #SDAS</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
