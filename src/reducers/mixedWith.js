import * as Constants from '../constants'

const initialState = {
    theme: 'light',
    showRemoveAllBtn: false,
    isColorPickerVisible: false,
    mixedColor: Constants.MIXED_COLOR,
    mixedColors: []
};

export default function mixedWith(state = initialState, action) {
    switch (action.type) {
    case Constants.CHANGE_MIXED_THEME:
        console.error('mixedWith CHANGE_THEME');
        return { ...state, theme: action.data };
    case Constants.CHANGE_MIXED_COLOR:
        console.error('mixedWith CHANGE_MIXED_COLOR');
        return { ...state, mixedColor: action.data.mixedColor, mixedColors: action.data.mixedColors, showRemoveAllBtn: false };
    case Constants.SELECT_ALL_COLORS:
        console.error('mixedWith SELECT_ALL_COLORS');

        if (action.data.name === 'MixedWith') {
            return { ...state, showRemoveAllBtn: true };
        }
        else {
            return { ...state, showRemoveAllBtn: false };
        }

    case Constants.REMOVE_ALL_COLORS:
        console.error('mixedWith REMOVE_ALL_COLORS');

        return { ...state, showRemoveAllBtn: false };
    case 'SET_MIXED_COLORS':
        return { ...state, mixedColors: action.data };
    default:
        return state;
    }
}