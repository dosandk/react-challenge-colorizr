import * as Constants from '../constants'
import { mixColors } from '../utils/colors-converters'

const initialState = {
    mainColor: Constants.MAIN_COLOR,
    mixedColor: Constants.MIXED_COLOR,
    selectedColors: [],
    shadedColors: [],
    mixedColors: []
};

export default function common(state = initialState, action) {
    switch (action.type) {
        case Constants.CHANGE_MAIN_COLOR:
            return { ...state, ...action.data };
        case Constants.CHANGE_MIXED_COLOR:
            const recalculateMixedColors = (data) => {
                const mixRation = Constants.MIX_RATION;

                let mixedColor = data.mainColor;
                let mixedColors = [];

                (function() {
                    for (let i = 0; i < Constants.COLORS_SIZE; i++) {
                        mixedColor = mixColors(mixedColor, data.mixedColor, mixRation);

                        mixedColors.push(mixedColor);
                    }
                }());

                return mixedColors;
            };

            const colors = recalculateMixedColors({mainColor: state.mainColor, mixedColor: action.data.mixedColor});

            return { ...state, mixedColor: action.data.mixedColor,  mixedColors: colors };
        case Constants.SELECT_COLOR:
            const selectedColors = state.selectedColors.concat([action.data]);
            
            return { ...state, selectedColors };
        case Constants.REMOVE_COLOR:
            const removedColor = action.data;
            const removedColorIndex = state.selectedColors.indexOf(removedColor);

            return { ...state,  selectedColors: [...state.selectedColors.slice(0, removedColorIndex), ...state.selectedColors.slice(removedColorIndex + 1) ]};
        case Constants.SELECT_ALL_COLORS:
            return { ...state, selectedColors: state[action.data.colorsType] };
        case Constants.REMOVE_ALL_COLORS:
            return { ...state, selectedColors: [] };
        case 'SET_MIXED_COLORS':
            return { ...state, mixedColors: action.data };
        case 'SET_SHADED_COLORS':
            return { ...state, shadedColors: action.data };
        default:
            return state;
    }
}