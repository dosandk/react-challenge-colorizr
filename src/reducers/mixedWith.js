import * as Constants from '../constants'

const initialState = {
    theme: 'light',
    showRemoveAllBtn: false,
    isColorPickerVisible: false
};

export default function mixedWith(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_MIXED_THEME':
        console.error('mixedWith CHANGE_THEME');
        return { ...state, theme: action.data };
    case 'CHANGE_MIX_COLOR':
        console.error('CHANGE_MIX_COLOR');
        return { ...state };
    case 'TOGGLE_MIX_COLOR_PICKER':
        console.error('TOGGLE_MIX_COLOR_PICKER');
        return { ...state };
    case 'mixedWith SELECT_COLOR':
        console.error('SELECT_COLOR');
        return { ...state  };
    case 'SELECT_ALL_COLORS':
        console.error('mixedWith SELECT_ALL_COLORS');
        if (action.data.name === 'MixedWith') {
            return { ...state, showRemoveAllBtn: true };
        }
        else {
            return { ...state };
        }
    default:
        return state;
    }
}