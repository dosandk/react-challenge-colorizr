import React from 'react';

export default function ColorsListHtml(props) {
    const theme = props.themeClass || '';

    return (
        <ul className={'color-samples ' + theme } >
            { props.children }
        </ul>
    );
};