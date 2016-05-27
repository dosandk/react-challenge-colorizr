import React from 'react';

export default function ColorHtml(props) {
    const colorStyle = props.colorStyle || 'grey';
    const colorClass = props.colorClass || '';
    const btnClass = props.btnClass || 'fa-times';
    const onColorClick = props.toggleColor || null;

    return (
        <li className={ 'color-sample ' + colorClass}
            style={{ background: colorStyle }}
            onClick={ onColorClick } >
            <i className={'fa ' + btnClass }></i>
        </li>
    )
};