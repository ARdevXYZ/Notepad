import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return(
            <nav>
                <ul className="main-nav-class">
                    <li>
                        <Link to="/">Notepad</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/articles-list">Notes</Link>
                    </li>
                    
                </ul>
            </nav>
        );
    }

}

export default NavBar;