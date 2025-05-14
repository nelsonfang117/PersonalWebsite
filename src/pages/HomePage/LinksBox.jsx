import './LinksBox.css'
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'; // using react-icons for simplicity
import leetcodeLogo from '../../assets/leetcode.png'
export default function LinksBox() {
    // We want icon links that lead to: LinkedIn, Github, LeetCode, etc.
    return (
        <div className="links-box">
            {/* <h2>Links</h2> */}
            <div className="icon-grid">
                <a href="https://www.linkedin.com/in/nelsonfang/" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/nelsonfang117" target="_blank" rel="noopener noreferrer" className="github">
                    <FaGithub className="icon" />
                </a>
                <a href="https://leetcode.com/u/nelsonfang117/" target="_blank" rel="noopener noreferrer">
                    {/* <FaCode className="icon" /> */}
                    <img src={ leetcodeLogo } alt="LeetCode" className="icon-img" />
                </a>
                {/* <a href="https://yourportfolio.com/" target="_blank" rel="noopener noreferrer">
                <FaCode className="icon" />
                </a> */}
            </div>
        </div>
    );
}