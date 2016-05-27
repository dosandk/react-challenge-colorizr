import * as Constants from '../constants'

import { shadeColor, mixColors } from '../utils/colors-converters'

const initialState = {
    mainColor: '#3B97D3',
    mixedColor: '#894B9D',
    selectedColors: [],
    shadedColors: [],
    mixedColors: []
};

(function() {
    const shadeRatio = Constants.MIX_RATION;
    const mixRation = Constants.SHADE_RATIO;

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
}());

export default function common(state = initialState, action) {
    switch (action.type) {
        case Constants.SELECT_COLOR:
            console.error('common SELECT_COLOR');
            const selectedColors = state.selectedColors.concat([action.data]);
            return { ...state, selectedColors };
        case Constants.REMOVE_COLOR:
            console.error('REMOVE_COLOR');
            const removedColor = action.data;
            const removedColorIndex = state.selectedColors.indexOf(removedColor);

            return { ...state,  selectedColors: [...state.selectedColors.slice(0, removedColorIndex), ...state.selectedColors.slice(removedColorIndex + 1) ]};
        case Constants.SELECT_ALL_COLORS:
            console.error('SELECT_ALL_COLORS');
            return { ...state, selectedColors: action.data };
        case Constants.REMOVE_ALL_COLORS:
            console.error('REMOVE_ALL_COLORS');
            return { ...state, selectedColors: [] };
        default:
            return state;
    }
}