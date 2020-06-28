import React, { Component } from 'react'
import '../../dependencies'

import Navbar from '../header/Navbar'
import Body from '../body/Body'

export default class Market extends Component {
    render() {
        return (
            <div className="Market">
                <Navbar />
                <Body />
            </div>
        )
    }
}