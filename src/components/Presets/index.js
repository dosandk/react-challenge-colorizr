import React from 'react';
import SetUpColors from '../../containers/SetUpColors'
import ColorsPresetsList from '../../containers/ColorsPresetsList'

export default () =>
    <div className="explore container">
        <h1>Explore ready to use color schemes</h1>
        <SetUpColors />
        <ColorsPresetsList name={'Flat'} />
    </div>