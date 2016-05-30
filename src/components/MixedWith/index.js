import React from 'react';
import changeMixedTheme from '../../actions/change-mixed-theme'
import changeMixedColor from '../../actions/change-mixed-color'
import selectAllColors from '../../actions/select-all-colors'
import ColorPallet from '../ColorPallet'
import ColorsList from '../../containers/ColorsList'
import removeAllColors from '../../actions/remove-all-colors'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss'

class MixedWith extends React.Component {
    render() {
        const { theme, showRemoveAllBtn, isColorPickerVisible } = this.props.mixedWith;

        const onSelectAllColors = () => {
            this.props.selectAllColors({
                name: 'MixedWith',
                colors: this.props.mixedWith.mixedColors
            });
        };

        const onChangeTheme = () => {
            switch (theme) {
                case 'light':
                    this.props.changeMixedTheme('dark');
                    break;
                case 'dark':
                    this.props.changeMixedTheme('light');
                    break;
            }
        };

        const removeAllColors = this.props.removeAllColors;

        return (
            <ColorPallet showColorPicker={ true }
                         mixedColor={ this.props.common.mixedColor }
                         mainColor={ this.props.common.mainColor }
                         showRemoveAllBtn={ showRemoveAllBtn }
                         onChangeTheme={ onChangeTheme }
                         changeMixedColor={ this.props.changeMixedColor }
                         isColorPickerVisible={ isColorPickerVisible }
                         removeAllColors={ removeAllColors }
                         onSelectAllColors={ onSelectAllColors }
                         theme={ theme }
                         palletName={ 'Mixed with' } >
                <ColorsList componentName={'mix'}/>
            </ColorPallet>
        );
    }
}

MixedWith.propTypes = {};
MixedWith.defaultProps = {};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        changeMixedTheme: bindActionCreators(changeMixedTheme, dispatch),
        selectAllColors: bindActionCreators(selectAllColors, dispatch),
        removeAllColors: bindActionCreators(removeAllColors, dispatch),
        changeMixedColor: bindActionCreators(changeMixedColor, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MixedWith)