import React, { Component } from 'react'
import List from '../market_list/List'
import './body.css'

export default class Body extends Component {

    constructor(props) {
        super(props)

        this.state = { }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0">Lista - Faça aqui sua lista de supermercado!</h6>
                            </div>
                            <div className="card-body p-2">
                                <List />
                                <button className="btn btn-sm btn-primary">
                                    <i className="fa fa-plus"></i>
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
