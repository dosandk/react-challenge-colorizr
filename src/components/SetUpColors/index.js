import React from 'react';
import { COLORS_SIZE } from '../../constants';
import { connect } from 'react-redux'
import css from './index.scss'

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
        const elemtStyles = {
            background: this.props.color,
            borderColor: this.state.defaultBg
        };

        const btnStyles = {
            color: this.state.defaultColor
        };

        return (
            <li className="selected__color selected__color--active"
                onClick={this.events.removeColor}
                style={elemtStyles}>

                {(() => {
                    if (this.state.selected) {
                        return <i className="fa fa-times selected__icon" style={btnStyles}></i>
                    }
                })()}
            </li>
        )
    }
}

class setUpColors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: []
        }
    }

    render() {
        return (
            <div className="selected">
                <h2 className="selected__title">Select up to ten colors</h2>

                <p>Select Colors by clicking on them</p>

                <ul className="selected__colors">
                    {[...Array(COLORS_SIZE)].map((x, i) =>
                        <Color key={i + 1} color={ this.props.SetUpColors.mainColor } />
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

// function someAction(data) {
//     return (dispatch) => {
//         dispatch({
//             type: 'STATE-1',
//             data
//         });
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         pageActions: bindActionCreators(someAction, dispatch)
//     }
// }

export default connect(mapStateToProps, null)(setUpColors)