import { MIX_RATION, COLORS_SIZE } from '../constants'
import { mixColors } from './colors-converters'

export default function recalculateMixedColors(data) {
    console.log(data);
    
    let mixedColor = data.mainColor;
    let mixedColors = [];

    (function() {
        for (let i = 0; i < COLORS_SIZE; i++) {
            mixedColor = mixColors(mixedColor, data.mixedColor, MIX_RATION);

            mixedColors.push(mixedColor);
        }
    }());

    return mixedColors;
};
