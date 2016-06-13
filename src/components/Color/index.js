import React from 'react';

export default (props) => {
    const colorStyle = props.colorStyle || 'grey';
    const colorClass = props.colorClass || '';
    const btnClass = props.btnClass || 'fa-times';
    const btnStyle = props.btnStyle || null;
    const onColorClick = props.toggleColor || null;

    return (
        <li className={ 'color-sample ' + colorClass}
            style={{ background: colorStyle }}
            onClick={ onColorClick } >
            <i className={'fa ' + btnClass } style={{ color: btnStyle }}></i>
        </li>
    )
};