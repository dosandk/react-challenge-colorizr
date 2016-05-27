import * as Constants from '../constants'

const initialState = {
    mainColor: '#3B97D3',
    selectedColors: []
};

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