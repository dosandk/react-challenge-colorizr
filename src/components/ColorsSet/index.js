import React from 'react'
import ColorsSetList from '../../containers/ColorsSetList';
import './index.scss'

export default (props) => {
    return (
        <div className="holder">

            <header className="holder__header">
                <h2 className="holder__title">{ props.name }</h2>
            </header>

            <ColorsSetList name={ props.name } />
        </div>
    )
};