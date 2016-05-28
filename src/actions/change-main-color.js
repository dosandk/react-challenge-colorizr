import * as Constants from '../constants'
import { shadeColor, mixColors } from '../utils/colors-converters'

export default function changeMainColor(data) {
    function recalculateColors() {
        const shadeRatio = Constants.SHADE_RATIO;
        const mixRation = Constants.MIX_RATION;

        let shadedColor = data;
        let mixedColor = data;
        let shadedColors = [];
        let mixedColors = [];

        (function() {
            for (let i = 0; i < Constants.COLORS_SIZE; i++) {
                shadedColor = shadeColor(shadedColor,  shadeRatio);
                mixedColor = mixColors(mixedColor,Constants.MIXED_COLOR, mixRation);

                shadedColors.push(shadedColor);
                mixedColors.push(mixedColor);
            }
        }());

        return { shadedColors, mixedColors};
    }

    return (dispatch) => {
        dispatch({
            type: Constants.CHANGE_MAIN_COLOR,
            data: {
                mainColor: data,
                shadedColors: recalculateColors().shadedColors,
                mixedColors: recalculateColors().mixedColors
            }
        });
    }
}