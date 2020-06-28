import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }

        this.renderItems = this.renderItems.bind(this)
    }

    componentDidUpdate(prevProps) {
        if(this.props != prevProps) {
            this.setState({
                list: [...this.props.list]
            })
        }
    }

    renderItems() {
        const list = this.state.list

        return list.map(item => {
            return (
                <Item
                    key={ item.id }
                    { ...item }
                    removeItem={ this.props.removeItem }
                >
                </Item>
            )
        })
    }

    render() {
        return (
            <ul className="list-unstyled mb-1">
                {
                    this.state.list.length ?
                    this.renderItems() :
                    <h6 className="text-center mb-2">Ainda não há items na sua lista!</h6>
                }
            </ul>
        )
    }
}