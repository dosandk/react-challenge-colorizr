import React from 'react';
import SetUpColors from '../../containers/SetUpColors'
import ColorsSet from '../../components/ColorsSet'

export default function Explore() {
    return(
        <div className="explore container">
            <h1>Explore presets</h1>
            <SetUpColors />
            <ColorsSet name={'Flat'} />
            <ColorsSet name={'Material'} />
        </div>
    )
}