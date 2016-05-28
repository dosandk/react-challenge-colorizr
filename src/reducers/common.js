import * as Constants from '../constants'

import { shadeColor, mixColors } from '../utils/colors-converters'

const initialState = {
    mainColor: Constants.MAIN_COLOR,
    mixedColor: Constants.MIXED_COLOR,
    selectedColors: [],
    shadedColors: [],
    mixedColors: []
};

function recalculateColors() {
    const shadeRatio = Constants.SHADE_RATIO;
    const mixRation = Constants.MIX_RATION;

    let shadedColor = initialState.mainColor;
    let mixedColor = initialState.mainColor;

    (function() {
        for (let i = 0; i < Constants.COLORS_SIZE; i++) {
            shadedColor = shadeColor(shadedColor,  shadeRatio);
            mixedColor = mixColors(mixedColor, initialState.mixedColor, mixRation);

            initialState.shadedColors.push(shadedColor);
            initialState.mixedColors.push(mixedColor);
        }
    }())
}

recalculateColors();

export default function common(state = initialState, action) {
    switch (action.type) {
        case Constants.CHANGE_MAIN_COLOR:
            return { ...state, ...action.data };
        case Constants.SELECT_COLOR:
            const selectedColors = state.selectedColors.concat([action.data]);
            return { ...state, selectedColors };
        case Constants.REMOVE_COLOR:
            const removedColor = action.data;
            const removedColorIndex = state.selectedColors.indexOf(removedColor);

            return { ...state,  selectedColors: [...state.selectedColors.slice(0, removedColorIndex), ...state.selectedColors.slice(removedColorIndex + 1) ]};
        case Constants.SELECT_ALL_COLORS:
            return { ...state, selectedColors: action.data };
        case Constants.REMOVE_ALL_COLORS:
            return { ...state, selectedColors: [] };
        default:
            return state;
    }
}