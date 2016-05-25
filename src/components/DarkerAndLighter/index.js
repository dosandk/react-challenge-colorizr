import React from 'react';
import './index.scss'

class Color extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            selected: true,
            defaultBg: '#F5F5F5',
            defaultColor: '#F5F5F5',
            defaultBorderColor: '#F5F5F5'
        };

        this.events = {
            removeColor: function () {
                console.error('remove event');
            }
        }
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

export default class DarkerAndLighter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: []
        }
    }

    render() {
        console.error('RENDER');
        console.log(this.props);

        return (
            <div className="container color-samples-container">
                <h2>Darker and Lighter</h2>

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
                        <button className="btn btn--danger">Remove all</button>
                    </footer>
                </div>
            </div>
        );
    }
}