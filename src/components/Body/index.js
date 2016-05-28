import React from 'react'
import { MAIN_COLOR } from '../../constants'
import ColorPickerWrapper from '../ColorPickerWrapper'
import SetUpColors from '../SetUpColors'
import DarkerAndLighter from '../DarkerAndLighter';
import MixedWith from '../MixedWith';

export default function Body() {
    return (
        <div className="content" style={{ background: MAIN_COLOR }}>
                <ColorPickerWrapper />
                <SetUpColors />
                <DarkerAndLighter />
                <MixedWith />
        </div>
    )
}