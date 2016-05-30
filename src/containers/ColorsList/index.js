import React from 'react'
import * as Constants from '../../constants'
import Color from '../../containers/Color'
import ColorsListHtml from '../../components/ColorsList';
import selectColor from '../../actions/select-color'
import removeColor from '../../actions/remove-color'
import setMixedColors from '../../actions/set-mixed-colors'
import setShadedColors from '../../actions/set-shaded-colors'

import { shadeColor, mixColors } from '../../utils/colors-converters'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ColorsList extends React.Component {
    render() {
        console.error('render');
        console.log( this.props );
        
        const { selectedColors, mainColor } = this.props.common;
        const { mixedColor } = this.props.mixedWith;

        const component = this.props.componentName === 'shade' ? this.props.DarkerAndLighter : this.props.mixedWith;
        const themeClass = component.theme === 'dark' ? 'color-samples--dark' : '';

        let colors;

        switch (this.props.componentName) {
            case 'shade':
                colors = recalculateShadedColors({ mainColor, mixedColor });
                break;
            case 'mix':
                colors = recalculateMixedColors({ mainColor, mixedColor });
                break;
        }

        const ColorsComponents = colors.map((color, index) => {
            const isSelected = selectedColors.indexOf(color) >= 0;

            return <Color color={ color }
                          key={ index }
                          selected={ isSelected }
                          removeColor={ this.props.removeColor }
                          selectColor={ this.props.selectColor } />
        });

        return (
            <ColorsListHtml themeClass={ themeClass } >
                { ColorsComponents }
            </ColorsListHtml>
        )
    }
}

const recalculateShadedColors = (data) => {
    const shadeRatio = Constants.SHADE_RATIO;

    let shadedColor = data.mainColor;
    let shadedColors = [];

    (function() {
        for (let i = 0; i < Constants.COLORS_SIZE; i++) {
            shadedColor = shadeColor(shadedColor,  shadeRatio);

            shadedColors.push(shadedColor);
        }
    }());

    return shadedColors;
};

const recalculateMixedColors = (data) => {
    const mixRation = Constants.MIX_RATION;

    let mixedColor = data.mainColor;
    let mixedColors = [];

    (function() {
        for (let i = 0; i < Constants.COLORS_SIZE; i++) {
            mixedColor = mixColors(mixedColor, data.mixedColor, mixRation);

            mixedColors.push(mixedColor);
        }
    }());

    return mixedColors;
};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        setMixedColors: bindActionCreators(setMixedColors, dispatch),
        setShadedColors: bindActionCreators(setShadedColors, dispatch),
        selectColor: bindActionCreators(selectColor, dispatch),
        removeColor: bindActionCreators(removeColor, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorsList);