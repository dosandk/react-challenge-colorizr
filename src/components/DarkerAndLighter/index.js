import React from 'react'
import selectColor from '../../actions/select-color'
import removeColor from '../../actions/remove-color'
import changeTheme from '../../actions/change-theme'
import selectAllColors from '../../actions/select-all-colors'
import removeAllColors from '../../actions/remove-all-colors'

import { shadeColor } from '../../utils/colors-converters'
import { COLORS_SIZE } from '../../constants'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss'

const Color = (props) => {
    var style = {
        background: props.color || '#004B87'
    };

    const toggleColor = () => {
        const color = props.color;

        if (props.selected) {
            props.removeColor(color);
        }
        else {
            props.selectColor(color);
        }
    };

    return (
        <li className={'color-sample ' + (props.selected ? 'color-sample--selected' : '')}
            onClick={toggleColor}
            style={style}>
             <i className={'fa ' + (props.selected ? 'fa-times' : 'fa-plus')} style={{color: '#fff'}}></i>
        </li>
    )
};

class DarkerAndLighter extends React.Component {
    render() {
        console.error('DarkerAndLighter');
        console.log('this.props', this.props);

        let ColorsList = [];
        let colors = [];
        const initValue = this.props.common.mainColor;
        const selectedColors = this.props.common.selectedColors;
        const selectColor = this.props.selectColor;
        const removeColor = this.props.removeColor;

        new Array(COLORS_SIZE).fill(true).reduce(function(previousValue, currentItem, index) {
            const newColor = shadeColor(previousValue, -0.1);
            colors.push(newColor);
            const isSelected = selectedColors.indexOf(newColor) >= 0 ? true : false;

            ColorsList.push(<Color color={newColor}
                                   key={index}
                                   selected={isSelected}
                                   removeColor={removeColor}
                                   selectColor={selectColor} />);

            return newColor;
        }, initValue);

        const onChangeTheme = () => {
            const theme = this.props.DarkerAndLighter.theme;

            switch (theme) {
            case 'light':
                this.props.changeTheme('dark');
                break;
            case 'dark':
                this.props.changeTheme('light');
                break;
            }
        };

        const onSelectAllColors = () => {
            this.props.selectAllColors(colors);
        };

        return (
            <div className="container color-samples-container">
                <h2>Darker and Lighter</h2>

                <div className="color-samples-wrapper">
                    <ul className={'color-samples ' + (this.props.DarkerAndLighter.theme === 'dark' ? 'color-samples--dark' : '') } >
                        { ColorsList }
                    </ul>
                    <footer className="color-samples-footer">
                        <button className="btn btn--default" onClick={onChangeTheme} >
                            { (this.props.DarkerAndLighter.theme === 'dark' ? 'Light background' : 'Dark background') }
                        </button>
                        <button className="btn btn--default" onClick={onSelectAllColors}>Select all</button>
                        <button className={'btn btn--danger ' + (this.props.DarkerAndLighter.showRemoveAllBtn ? '' : 'hide')}
                                onClick={this.props.removeAllColors}>
                            Remove all
                        </button>
                    </footer>
                </div>
            </div>
        );
    }
}

DarkerAndLighter.propTypes = {};
DarkerAndLighter.defaultProps = {};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        selectColor: bindActionCreators(selectColor, dispatch),
        removeColor: bindActionCreators(removeColor, dispatch),
        changeTheme: bindActionCreators(changeTheme, dispatch),
        selectAllColors: bindActionCreators(selectAllColors, dispatch),
        removeAllColors: bindActionCreators(removeAllColors, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DarkerAndLighter)