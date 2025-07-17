import './Footer.css'
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'; // using react-icons for simplicity
import leetcodeLogo from '../../assets/leetcode.png'
import ButtonMailto from './ButtonMailto';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="find-me-column">
                <h4>Find me on</h4>
                <div>
                    <a href="https://www.linkedin.com/in/nelsonfang/" target="_blank" rel="noopener noreferrer" className="linkedin">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/nelsonfang117" target="_blank" rel="noopener noreferrer" className="github">
                        <FaGithub className="icon" />
                    </a>
                </div>
                <div className="email-blurb">
                    <p>Email me: </p>
                    <ButtonMailto label="nelsonfang117@gmail.com" mailto="mailto:nelsonfang117@gmail.com" />
                </div>
            </div>

        </div>
    );
}