import React from 'react'
import './index.scss'

export default (props) => {
    const { color, toggleSelection, selected } = props;

    return(
        <div className={'sample ' + (selected ? 'sample--selected' : '')} onClick = { toggleSelection }>
            <span className="sample__color" style={{ background: color }}></span>
            <span className="sample__name">{ color }</span>
        </div>
    );
}