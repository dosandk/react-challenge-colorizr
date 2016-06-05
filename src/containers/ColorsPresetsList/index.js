import React from 'react';
import ColorsPreset from '../../components/ColorsPreset'
import selectColors from '../../actions/select-colors'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const presets = [
    {
        "type": "scheme",
        "name": "aspirin",
        "colors": ["#225378", "#1695A3", "#ACF0F2", "#F3FFE2", "#EB7F00"]
    },
    {
        "type": "scheme",
        "name": "bird",
        "colors": ["#2B3A42", "#3F5765", "#BDD4DE", "#EFEFEF", "#FF530D"]
    },
    {
        "type": "scheme",
        "name": "firenze",
        "colors": ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"]
    },
    {
        "type": "scheme",
        "name": "honey",
        "colors": ["#105B63", "#FFFAD5", "#FFD34E", "#DB9E36", "#BD4932"]
    },
    {
        "type": "scheme",
        "name": "retromatic",
        "colors": ["#EE1848", "#131829", "#3C3F87", "#3AAD9F", "#A8F0C9"]
    },
    {
        "type": "scheme",
        "name": "sandy",
        "colors": ["#E6E2AF", "#A7A37E", "#EFECCA", "#046380", "#002F2F"]
    },
    {
        "type": "scheme",
        "name": "sky",
        "colors": ["#16193B", "#35478C", "#4E7AC7", "#7FB2F0", "#ADD5F7"]
    },
    {
        "type": "scheme",
        "name": "sunset",
        "colors": ["#623C62", "#2C1B31", "#B04361", "#FA7066", "#FEBB62"]
    },
    {
        "type": "scheme",
        "name": "times",
        "colors": ["#332532", "#644D52", "#F77A52", "#FF974F", "#A49A87"]
    },
    {
        "type": "scheme",
        "name": "wolf",
        "colors": ["#DC3522", "#D9CB9E", "#374140", "#2A2C2B", "#1E1E20"]
    }
];

export default class ColorsPresetsList extends React.Component {
    getPresetsItems() {
        const { selectedColors } = this.props.common;

        const checkIsSelected = (colors) => {
            let isSelected = true;
            const colorsLength = colors.length;

            for (let i = 0; i < colorsLength; i++) {
                if (selectedColors.indexOf(colors[i]) < 0) {
                    isSelected = false;
                    console.count();
                    break;
                }
            }

            return isSelected;
        };

        const onSelectColors = (colors) => (e) => this.props.selectColors(colors)

        return presets.map(function(preset) {
            const {name, colors} = preset;
            const selected = checkIsSelected(colors);

            return <ColorsPreset key = { name }
                                 selected = { selected }
                                 selectPreset = { onSelectColors(colors) }
                                 colors = { colors }
                                 name = { name } />
        })
    }

    render() {
        return (
            <div>{ this.getPresetsItems() }</div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        selectColors: bindActionCreators(selectColors, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorsPresetsList);