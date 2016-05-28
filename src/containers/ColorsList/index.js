import React from 'react'
import Color from '../../containers/Color'
import ColorsListHtml from '../../components/ColorsList';
import selectColor from '../../actions/select-color'
import removeColor from '../../actions/remove-color'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const ColorsList = (props) => {
    const { shadedColors, mixedColors, selectedColors } = props.common;
    const component = props.componentName === 'shade' ? props.DarkerAndLighter : props.mixedWith;
    const themeClass = component.theme === 'dark' ? 'color-samples--dark' : '';
    const colors = props.componentName === 'shade' ? shadedColors : mixedColors;

    const ColorsComponents = colors.map((color, index) => {
        const isSelected = selectedColors.indexOf(color) >= 0;

        return <Color color={ color }
                      key={ index }
                      selected={ isSelected }
                      removeColor={ props.removeColor }
                      selectColor={ props.selectColor } />
    });

    return (
        <ColorsListHtml themeClass={themeClass} >
            { ColorsComponents }
        </ColorsListHtml>
    )
};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        selectColor: bindActionCreators(selectColor, dispatch),
        removeColor: bindActionCreators(removeColor, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorsList);