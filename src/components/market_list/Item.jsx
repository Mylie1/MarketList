import React, { Component } from 'react'

export default class Item extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...props,
            isChecked: false
        }

        this.isChecked = this.isChecked.bind(this)
    }

    isChecked() {
        this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        const checkedClass = this.state.isChecked ? 'label_checked' : ''

        return (
            <li className="custom_checkbox">
                <input type="checkbox" id={`item_${ this.props.id }`} className="checkbox" />
                <label onClick={ this.isChecked } htmlFor={`item_${ this.props.id }`} className={`checkbox_label ${ checkedClass }`}>
                    { this.props.name }
                </label>
            </li>
        )
    }
}