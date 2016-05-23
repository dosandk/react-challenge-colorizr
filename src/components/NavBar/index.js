import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Bar</li>
                    <li>Foo</li>
                    <li>Riba</li>
                    <li>Zoo</li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}