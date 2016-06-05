import React, { Component } from 'react'
import Color from '../../components/SetColor';
import selectColor from '../../actions/select-color'
import removeColor from '../../actions/remove-color'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const colorsFlatArr = [
    "#26b99a", "#4fba6f", "#14a085", "#24ae5f", "#3b97d3", "#2980ba", "#955ba5",
    "#894b9d", "#35495e", "#2c3e50", "#f0c419", "#f29c1f", "#e57e25", "#d25627",
    "#e64c3c", "#c03a2b", "#ecf0f1", "#bdc3c7", "#95a5a5", "#7f8c8d"
];

const colorsMaterial = [
    "#d32f2f", "#ad1457", "#6a1b9a", "#4527a0", "#283593", "#1565C0",
    "#0277bd", "#00838f", "#00695c", "#2e7d32", "#558b2f", "#9e9d24",
    "#f9a825", "#ff8f00", "#ef6c00", "#d84315", "#4e342e", "#424242",
    "#37474f"
];

class ColorsSetList extends Component {

    render() {
        const {name, selectColor, removeColor } = this.props;

        let colorsItems;
        let colors;

        switch (name) {
            case 'Flat':
                colors = colorsFlatArr;
                break;
            case 'Material':
                colors = colorsMaterial;
                break;
        }

        const onSelectColor = (color) => (e) => selectColor(color);
        const onRemoveColor = (color) => (e) => removeColor(color);
        const checkIsColorSelected = (color) => this.props.common.selectedColors.indexOf(color) >= 0;
        const toggleSelection = (color) => checkIsColorSelected(color) ? onRemoveColor(color) : onSelectColor(color);


        colorsItems = colors.map(function(color) {
            return <Color key={ color }
                          color={ color }
                          selected = { checkIsColorSelected(color) }
                          toggleSelection = { toggleSelection(color) } />
        });

        return(
            <div className="holder__body">
                { colorsItems }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        selectColor: bindActionCreators(selectColor, dispatch),
        removeColor: bindActionCreators(removeColor, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorsSetList);