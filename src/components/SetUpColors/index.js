import React from 'react';
import { COLORS_SIZE } from '../../constants'
import { bindActionCreators } from 'redux'
import removeColor from '../../actions/remove-color'
import { connect } from 'react-redux'
import './index.scss'

class Color extends React.Component {
    render() {
        const self = this;

        const elementStyles = {
            background: this.props.color || '#F5F5F5',
            borderColor: this.props.color || '#F5F5F5'
        };

        const btnStyles = {
            color: '#F5F5F5'
        };

        function onRemoveColor() {
            self.props.removeColor(self.props.color);
        }

        return (
            <li className="selected__color selected__color--active"
                onClick={onRemoveColor}
                style={elementStyles}>
                <i className="fa fa-times selected__icon" style={btnStyles}></i>
            </li>
        )
    }
}

class setUpColors extends React.Component {
    render() {
        return (
            <div className="selected">
                <h2 className="selected__title">Select up to ten colors</h2>

                <p>Select Colors by clicking on them</p>

                <ul className="selected__colors">
                    {[...Array(COLORS_SIZE)].map((x, i) =>
                        <Color key={i + 1} color={ this.props.common.selectedColors[i] } removeColor={this.props.removeColor} />
                    )}
                </ul>
            </div>
        );
    }
}

setUpColors.propTypes = {};
setUpColors.defaultProps = {};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        removeColor: bindActionCreators(removeColor, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(setUpColors)