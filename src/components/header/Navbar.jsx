import React from 'react'
import logo from '../../assets/images/brand.png'

export default props =>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">
        <img src="{logo}" alt="marketList"/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Link</a>
            </li>
        </ul>
    </div>
</nav>
