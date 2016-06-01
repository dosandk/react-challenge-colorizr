import React from 'react'
import { MAIN_COLOR } from '../../constants'
import ColorPickerWrapper from '../../containers/ColorPickerWrapper'
import SetUpColors from '../../containers/SetUpColors'
import DarkerAndLighter from '../../containers/DarkerAndLighter';
import MixedWith from '../../containers/MixedWith';

export default function Create() {
    return (
        <div className="content" style={{ background: MAIN_COLOR }}>
                <ColorPickerWrapper />
                <SetUpColors />
                <DarkerAndLighter />
                <MixedWith />
        </div>
    )
}