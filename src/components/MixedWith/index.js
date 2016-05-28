import React from 'react';
import changeMixedTheme from '../../actions/change-mixed-theme'
import ColorPallet from '../colorPallet'
import ColorsList from '../../containers/ColorsList'
import selectColor from '../../actions/select-color'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss'

class MixedWith extends React.Component {
    render() {
        console.error('MixedWith');
        console.log(this.props);

        return (
            <ColorPallet showColorPicker={ true } >
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
        selectColor: bindActionCreators(selectColor, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MixedWith)