import React from 'react'
import ColorPallet from '../colorPallet'
import changeShadeTheme from '../../actions/change-shade-theme'
import ColorsList from '../../containers/ColorsList'
import selectAllColors from '../../actions/select-all-colors'
import removeAllColors from '../../actions/remove-all-colors'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss'

class DarkerAndLighter extends React.Component {
    render() {
        const { theme, showRemoveAllBtn } = this.props.DarkerAndLighter;
        const palletName = 'Darker and Lighter';

        const onSelectAllColors = () => {
            this.props.selectAllColors(this.props.common.shadedColors);
        };

        const removeAllColors = this.props.removeAllColors;

        const onChangeTheme = () => {
            switch (theme) {
            case 'light':
                this.props.changeShadeTheme('dark');
                break;
            case 'dark':
                this.props.changeShadeTheme('light');
                break;
            }
        };

        return (
            <ColorPallet onChangeTheme={onChangeTheme}
                         onSelectAllColors={onSelectAllColors}
                         removeAllColors={removeAllColors}
                         palletName={palletName}
                         showRemoveAllBtn={showRemoveAllBtn}
                         theme={theme}>
                <ColorsList componentName={'shade'}/>
            </ColorPallet>
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
        changeShadeTheme: bindActionCreators(changeShadeTheme, dispatch),
        selectAllColors: bindActionCreators(selectAllColors, dispatch),
        removeAllColors: bindActionCreators(removeAllColors, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DarkerAndLighter)