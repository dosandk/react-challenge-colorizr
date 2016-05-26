import React from 'react'
import ColorPickerWrapper from '../ColorPickerWrapper'
import SetUpColors from '../SetUpColors'
import DarkerAndLighter from '../DarkerAndLighter';
import MixedWith from '../MixedWith';

import './index.scss';

export default function Body() {
    return (
        <div className="content">
                <ColorPickerWrapper />
                <SetUpColors />
                <DarkerAndLighter />
                <MixedWith />
        </div>
    )
}