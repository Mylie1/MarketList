import React, { Component } from 'react'
import List from '../market_list/List'
import './body.css'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/list'
const initialState = {
    list: []
}

export default class Body extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...initialState,
            addInput: false,
            focus: false,
            value: ''
        }

        this.textInput = React.createRef()
        this.handleAddListItem = this.handleAddListItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    componentWillMount() {
        axios(baseUrl).then(response => {
            this.setState({ list: response.data })
        })
    }

    handleAddListItem() {
        this.setState({ addInput: true })
        this.textInput.current.focus()
    }

    keypress(e) {
        if(e.keyCode == 13) {
            this.addListItem()
        }
    }

    nextId() {
        const list = [...this.state.list]

        if(!list.length) {
            return 1
        }

        const last = list.pop()
        let id = last.id
        return ++id
    }

    async addListItem() {
        await axios.post(baseUrl, {
            id: this.nextId(),
            name: this.state.value
        }).then(response => {
            this.setState({
                list: [...this.state.list, response.data],
                value: '',
            })
        }).catch(error => {
            console.log(error.response.data)
        })
    }

    async removeItem(e) {
        const id = e.currentTarget.id.split('_')[2]
        const item = this.state.list.filter(item => item.id == id)[0]
        const newList = this.state.list.filter(item => item.id != id)

        await axios.delete(`${baseUrl}/${item.id}`).then(response => {
            this.setState({ list: newList })
        }).catch(error => {
            console.log(error.response.statusText)
        })
    }

    render() {
        const showAddInput = this.state.addInput ? '' : 'd-none'

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0">Lista - Faça aqui sua lista de supermercado!</h6>
                            </div>
                            <div className="card-body p-2">
                                <div className="list_items">
                                    <List
                                        list={this.state.list}
                                        removeItem={ this.removeItem }
                                    />
                                </div>
                                <div className="new_item">
                                    <input
                                        onChange={ (e) => this.setState({ value: e.target.value }) }
                                        onKeyDown={ (e) => this.keypress(e) }
                                        value={ this.state.value }
                                        ref={ this.textInput }
                                        type="text"
                                        id="add_item_input"
                                        className={`form-control ${ showAddInput }`}
                                    />
                                    <div className="text-center">
                                        <button onClick={ this.handleAddListItem } className="btn btn-sm btn-info">
                                            <i className="fa fa-plus mr-2"></i>
                                            Adicionar item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
