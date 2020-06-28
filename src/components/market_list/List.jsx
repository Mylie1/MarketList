import React, { Component } from 'react'
import Item from './Item'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/list'
const initialState = {
    list: []
}

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = { ...initialState }

        this.renderItems = this.renderItems.bind(this)
    }

    componentWillMount() {
        axios(baseUrl).then(response => {
            this.setState({ list: response.data })
        })
    }

    renderItems() {
        const list = this.state.list

        return list.map(item => {
            return (
                <Item
                    key={ item.id }
                    { ...item }
                >
                </Item>
            )
        })
    }

    render() {
        return (
            <ul className="list-unstyled">
                { this.renderItems() }
            </ul>
        )
    }
}