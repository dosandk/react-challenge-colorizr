import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ColorPicker from 'react-color-picker'
import { shadeColor, blendColors } from '../../utils/colors-converters';
import './index.scss'

class ColorPickerWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainColor: '#3B97D3'
        };

        this.onChangeColor = (color) => {
            this.props.changeColor(color);
        };
    }

    render() {
        return (
            <div className="create__container">
                <h1 className="title">Choose your color</h1>
                <ColorPicker defaultValue='#452135' onDrag={this.onChangeColor.bind(this)} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}


function someAction(data) {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_COLOR',
            data
        });
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeColor: bindActionCreators(someAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerWrapper)