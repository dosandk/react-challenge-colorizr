import React from 'react';
import { shadeColor } from '../../utils/colors-converters';
import { COLORS_SIZE } from '../../constants';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss'

const Color = (props) => {
    var style = {
        background: props.color || '#004B87'
    };

    const onSelectColor = (e) => {
        console.error('onSelectColor', e);
        console.log(props);
        props.selectColor();
    };

    return (
        <li className="color-sample color-sample--selected"
            onClick={onSelectColor}
            style={style}>
            {(() => {
                if (true) {
                    return <i className="fa fa-times" style={{color: '#fff'}}></i>
                }
            })()}
        </li>
    )
};

class DarkerAndLighter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: []
        }
    }

    render() {
        console.log('this.props', this.props);

        let ColorsList = [];
        const initValue = this.props.mainColor;
        const selectColor = this.props.selectColor;

        new Array(COLORS_SIZE).fill(true).reduce(function(previousValue, currentItem, index) {
            const newColor = shadeColor(previousValue, -0.1);

            ColorsList.push(<Color color={newColor} key={index} selectColor={selectColor} />);

            return newColor;
        }, initValue);

        return (
            <div className="container color-samples-container">
                <h2>Darker and Lighter</h2>

                <div className="color-samples-wrapper">
                    <ul className="color-samples">
                        { ColorsList }
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

DarkerAndLighter.propTypes = {};
DarkerAndLighter.defaultProps = {};

function someAction(data) {
    return (dispatch) => {
        dispatch({
            type: 'SELECT_COLOR',
            data
        });
    }
}

function mapStateToProps(state) {
    return state.SetUpColors;
}

function mapDispatchToProps(dispatch) {
    return {
        selectColor: bindActionCreators(someAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DarkerAndLighter)