import { Link } from '@remix-run/react';

const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/info">Info</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;