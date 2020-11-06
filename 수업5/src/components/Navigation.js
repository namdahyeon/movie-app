import React from 'react'
import {Link} from 'react-router-dom';
import './Navigation.css';

/* ['react-router-dom' 설치 터미널 값]
npm install --save react-router-dom
npm install --save-dev @types/react-router-dom */

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>{/* a태그를 사용하면 react-router-dom이 리셋되므로 Link속성을 사용한다. */}
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
        </div>
    )
}

export default Navigation
