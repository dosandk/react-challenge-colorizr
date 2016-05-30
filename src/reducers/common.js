import * as Constants from '../constants'
import recalculateMixedColors from '../utils/recalculate-mixed-colors'

const initialState = {
    mainColor: Constants.MAIN_COLOR,
    selectedColors: [],
    shadedColors: []
};

export default function common(state = initialState, action) {
    switch (action.type) {
        case Constants.CHANGE_MAIN_COLOR:
            return { ...state, ...action.data };
        case Constants.SELECT_COLOR:
            let selectedColors;

            if (state.selectedColors.length >= 10) {
                selectedColors = state.selectedColors.slice(1).concat([action.data]);
            }
            else {
                selectedColors = state.selectedColors.concat([action.data]);
            }
            
            return { ...state, selectedColors };
        case Constants.REMOVE_COLOR:
            const removedColor = action.data;
            const removedColorIndex = state.selectedColors.indexOf(removedColor);

            return { ...state,  selectedColors: [...state.selectedColors.slice(0, removedColorIndex), ...state.selectedColors.slice(removedColorIndex + 1) ]};
        case Constants.SELECT_ALL_COLORS:
            console.error('common SELECT_ALL_COLORS');

            return { ...state, selectedColors: action.data.colors };
        case Constants.REMOVE_ALL_COLORS:
            return { ...state, selectedColors: [] };
        default:
            return state;
    }
}