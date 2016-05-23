import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ColorPicker from 'react-color-picker'
import './index.scss'

class ColorPickerWrapper extends Component {
    constructor(props) {
        super(props);
        console.log('arguments', arguments);

        this.state = {
            riba: 'riba'
        };

        this.onDrag = (color, c) => {
            document.body.style.background = color;
            // this.setState({})
        };
    }

    render() {
        const changeState = this.props.changeState;

        console.log('render', changeState);

        return (
            <div className="create__container">
                <h1 className="title" onClick={changeState}>Choose your color</h1>

                <ColorPicker defaultValue='#452135' onDrag={this.onDrag} />
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         user: state.user,
//         page: state.page
//     }
// }


function someAction(data) {
    return (dispatch) => {
        dispatch({
            type: 'STATE-1',
            data
        });
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeState: bindActionCreators(someAction, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(ColorPickerWrapper)