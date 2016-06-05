import React from 'react';
import './index.scss'

const Color = (props) => {
    return(
        <div className="scheme__color" style={{ background: props.color}}></div>
    )
};

export default (props) => {
    const { name, selected } = props

    const getColorsItems = () => props.colors.map(function(color) {
        return <Color key = { color } color = { color } />
    })

    const select = () => selected ? null : props.selectPreset(props.colors)

    return (
        <div className="scheme" onClick = { select }>
            <header className="scheme__header">
                <h2>
                    { name }
                    {' '}
                    <i className={'fa ' + (selected ? 'fa-check' : '')}></i>
                </h2>
            </header>
            <div className="scheme__body">
                { getColorsItems() }
            </div>
        </div>
    )
}