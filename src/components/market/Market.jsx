import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontawesome'

import Navbar from '../header/Navbar'

export default class Market extends Component {
    render() {
        return (
            <div className="Market">
                <Navbar />
                <h1>Market List!</h1>
            </div>
        )
    }
}