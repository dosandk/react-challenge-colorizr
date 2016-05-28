import React, { Component } from 'react';
import changeMainColor from '../../actions/change-main-color'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ColorPicker from 'react-color-picker'
import './index.scss'

class ColorPickerWrapper extends Component {
    constructor(props) {
        super(props);

        this.onChangeColor = (color) => {
            this.props.changeMainColor(color);
            document.querySelector('.content').style.background = color;
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

function mapDispatchToProps(dispatch) {
    return {
        changeMainColor: bindActionCreators(changeMainColor, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerWrapper)