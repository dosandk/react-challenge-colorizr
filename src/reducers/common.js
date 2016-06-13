import * as Constants from '../constants'

const initialState = {
    mainColor: Constants.MAIN_COLOR,
    selectedColors: [],
    shadedColors: []
};

export default function common(state = initialState, action) {
    switch (action.type) {
        case Constants.CHANGE_MAIN_COLOR:
            return { ...state, ...action.data };
        case Constants.SELECT_COLORS:
            return { ...state, selectedColors: action.data };
        case Constants.SELECT_COLOR:
            if (state.selectedColors.length >= Constants.COLORS_SIZE) {
                return { ...state, selectedColors: state.selectedColors.slice(1).concat([action.data]) };
            }
            else {
                return { ...state, selectedColors: state.selectedColors.concat([action.data]) };
            }
        case Constants.REMOVE_COLOR:
            const removedColor = action.data;
            const removedColorIndex = state.selectedColors.indexOf(removedColor);

            return { ...state,  selectedColors: [...state.selectedColors.slice(0, removedColorIndex), ...state.selectedColors.slice(removedColorIndex + 1) ]};
        case Constants.SELECT_ALL_COLORS:
            return { ...state, selectedColors: action.data.colors };
        case Constants.REMOVE_ALL_COLORS:
            return { ...state, selectedColors: [] };
        default:
            return state;
    }
}