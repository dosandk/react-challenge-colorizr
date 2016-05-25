import React from 'react';
import ColorPicker from 'react-color-picker'
import './index.scss'

class Color extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            selected: true
        };
    }

    render() {
        return (
            <li className="color-sample color-sample--selected" style={{background: '#004B87'}}>
                {(() => {
                    if (this.state.selected) {
                        return <i className="fa fa-times" style={{color: '#fff'}}></i>
                    }
                })()}
            </li>
        )
    }
}

export default class MixedWith extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: []
        }
    }

    render() {
        return (
            <div className="container color-samples-container">
                <header className="create__header">
                    <h2>Mixed with </h2>
                    <span className="mixer" style={{background: '#894B9D'}}></span>
                </header>
                <div className="cp_shown" style={{display: 'block'}} >
                    <ColorPicker defaultValue='#452135' onDrag={() => {}} />
                </div>
                <div className="color-samples-wrapper">
                    <ul className="color-samples">
                        {[...Array(10)].map((x, i) =>
                            <Color key={i + 1} color={ this.props.mainColor } />
                        )}
                    </ul>
                    
                    <footer className="color-samples-footer">
                        <button className="btn btn--default">
                            Dark background
                        </button>
                        <button className="btn btn--default">Select all</button>
                        <button className="btn btn--danger"  >Remove all</button>
                    </footer>
                </div>
            </div>
        );
    }
}