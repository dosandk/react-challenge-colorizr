import React from 'react'
import ColorHtml from '../../components/Color'
import brightness from '../../utils/brightness'

const Color = (props) => {
    const { color, selected } = props;

    const currentState = {
        colorStyle: color || 'grey',
        colorClass: selected ? 'color-sample--selected' : '',
        btnClass: selected ? 'fa-times' : 'fa-plus',
        btnStyle: color ? brightness(color) : 'grey',
        toggleColor: () => selected ? props.removeColor(color) : props.selectColor(color)
    };

    return <ColorHtml { ...currentState } />;
};

export default Color;