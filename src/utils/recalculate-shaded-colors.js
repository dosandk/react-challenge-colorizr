import { SHADE_RATIO, COLORS_SIZE } from '../constants'
import { shadeColor } from './colors-converters'

export default function recalculateShadedColors(data) {
    let shadedColor = data.mainColor;
    let shadedColors = [];

    (function() {
        for (let i = 0; i < COLORS_SIZE; i++) {
            shadedColor = shadeColor(shadedColor,  SHADE_RATIO);

            shadedColors.push(shadedColor);
        }
    }());

    return shadedColors;
};
